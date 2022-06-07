import { Component, OnInit } from '@angular/core';
import { OrderService } from '../../servicesdata/order.service';
import { Order } from '../../servicesdata/cart.service';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.scss'],
})
export class OrderListComponent implements OnInit {
  orders: Order[] = [];
  constructor(public orderService: OrderService) {}

  ngOnInit(): void {
    this.orders = this.orderService.getOrdersByEmail();
  }
}
