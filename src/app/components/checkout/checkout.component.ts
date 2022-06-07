import { OrderService } from './../../servicesdata/order.service';
import { Component, OnInit, Pipe } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {
  ActivatedRoute,
  NavigationEnd,
  Router,
  RouterEvent,
} from '@angular/router';
import { CartService } from 'src/app/servicesdata/cart.service';
import Swal from 'sweetalert2';
import { AuthService } from '../../servicesdata/auth.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss'],
})
export class CheckoutComponent implements OnInit {
  continueCheckout = false;
  public coupons = [
    { name: 'nhattv9', value: 50 },
    { name: 'dongnt11', value: 70 },
    { name: 'ngaht10', value: 60 },
  ];
  public user = this.authService.user;
  public checkCoupon = false;
  public valueCoupon = 0;
  public checkoutForm = new FormGroup({
    coupon: new FormControl(''),
  });
  paymentForm = new FormGroup({
    acceptConditions: new FormControl(false, Validators.required),
    paymentMethod: new FormControl('paypal', Validators.required),
  });
  contactForm = new FormGroup({
    firstName: new FormControl('', [
      Validators.required,
      Validators.minLength(1),
    ]),
    lastName: new FormControl('', [
      Validators.required,
      Validators.minLength(1),
    ]),
    phoneNumber: new FormControl('', [
      Validators.required,
      Validators.pattern('^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-s./0-9]*$'),
    ]),
    email: new FormControl(this.authService.user.email, [
      Validators.required,
      Validators.pattern('^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?w+)*(\\.\\w{2,3})+$'),
    ]),
    country: new FormControl('VietNam', [Validators.required]),
    city: new FormControl('', [Validators.required]),
    address: new FormControl('', [Validators.required]),
    postcode: new FormControl('', [Validators.required]),
  });
  constructor(
    public authService: AuthService,
    private router: Router,
    private activatedRouter: ActivatedRoute,
    public cartService: CartService,
    private orderService: OrderService
  ) {}
  ngOnInit(): void {
    // this.activatedRouter.url.subscribe((p) => {
    //   this.authService.navigationUrl = p[0].path;
    //   console.log(this.authService.navigationUrl);
    // });
    if (this.authService.user.contact) {
      this.phoneNumber.setValue(this.authService.user.contact.phoneNumber);
      this.address.setValue(this.authService.user.contact.address);
      this.city.setValue(this.authService.user.contact.city);
      this.country.setValue(this.authService.user.contact.country);
      this.postcode.setValue(this.authService.user.contact.postcode);
      this.firstName.setValue(this.authService.user.contact.firstName);
      this.lastName.setValue(this.authService.user.contact.lastName);
    }
  }
  get coupon() {
    return this.checkoutForm.get('coupon');
  }
  get acceptConditions() {
    return this.paymentForm.get('acceptConditions');
  }
  get paymentMethod() {
    return this.paymentForm.get('paymentMethod');
  }
  get firstName() {
    return this.contactForm.get('firstName');
  }
  get lastName() {
    return this.contactForm.get('lastName');
  }
  get phoneNumber() {
    return this.contactForm.get('phoneNumber');
  }
  get country() {
    return this.contactForm.get('country');
  }
  get email() {
    return this.contactForm.get('email');
  }
  get city() {
    return this.contactForm.get('city');
  }
  get address() {
    return this.contactForm.get('address');
  }
  get postcode() {
    return this.contactForm.get('postcode');
  }
  getTotal() {
    return (
      this.cartService.deliveryfee +
      this.cartService.getTotalPrice() -
      this.valueCoupon
    );
  }
  applyCoupon() {
    for (let c of this.coupons) {
      if (this.coupon.value == c.name) {
        this.checkCoupon = true;
        this.valueCoupon = c.value;
        return;
      }
    }
  }
  checkout() {
    //save payment method
    // this.user.paymentMethod = this.paymentMethod.value;
    this.authService.user.name = this.firstName.value;
    this.authService.user.lastName = this.lastName.value;
    this.authService.contact = {
      address: this.address.value,
      city: this.city.value,
      country: this.country.value,
      phoneNumber: this.phoneNumber.value,
      postcode: this.postcode.value,
      lastName: this.lastName.value,
      firstName: this.firstName.value,
    };
    let orderId = this.orderService.setOrder(
      this.cartService.getCart(),
      this.getTotal().toFixed(2),
      this.paymentMethod.value
    );
    this.cartService.removeCart();
    Swal.fire({
      icon: 'success',
      title: 'Payment successfull',
    }).then(() => this.router.navigateByUrl('/confirmation/' + orderId));
    this.continueCheckout = true;
  }
}
