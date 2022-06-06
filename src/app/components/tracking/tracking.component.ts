import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { OrderService } from '../../servicesdata/order.service';

@Component({
  selector: 'app-tracking',
  templateUrl: './tracking.component.html',
  styleUrls: ['./tracking.component.scss'],
})
export class TrackingComponent implements OnInit {
  trackingForm = new FormGroup({
    idOrder: new FormControl('', [Validators.required]),
  });
  constructor(private router: Router, private orderService: OrderService) {}
  get idOrder() {
    return this.trackingForm.get('idOrder');
  }
  ngOnInit(): void {}
  submit() {
    let order = this.orderService.getOrderById(this.idOrder.value);
    if (order) {
      this.router.navigateByUrl('/confirmation/' + order.id);
    }
  }
}
