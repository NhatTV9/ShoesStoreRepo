import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
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

  constructor(
    public authService: AuthService,
    private router: Router,
    private activatedRouter: ActivatedRoute,
    public cartService: CartService
  ) {}
  ngOnInit(): void {
    this.activatedRouter.url.subscribe((p) => {
      this.authService.navigationUrl = p[0].path;
    });
    if (!this.authService.isLogin()) {
      this.router.navigateByUrl('/login');
    }
    if (this.authService.user) {
      this.user.phone = '0328683017';
      if (this.user.name == 'nga') {
        this.user.lastName = 'Hoang Thanh ';
      }
      if (this.user.name == 'nhat') {
        this.user.lastName = 'Tran Van ';
      }
      this.user.location = 'Quynh Hong - Quynh Phu - Thai Binh';
    }
  }
  get coupon() {
    return this.checkoutForm.get('coupon');
  }
  onBlur(x) {
    console.log(x);
  }
  applyCoupon() {
    console.log(this.coupon.value);
    for (let c of this.coupons) {
      if (this.coupon.value == c.name) {
        this.checkCoupon = true;
        this.valueCoupon = c.value;
        return;
      }
    }
  }
  pay() {
    let cart = [];
    this.cartService.setCart(cart);
    Swal.fire({
      icon: 'success',
      title: 'Sigup succesful',
    });
  }
}
