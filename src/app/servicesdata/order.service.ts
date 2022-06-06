import { Injectable } from '@angular/core';
import { Order } from './cart.service';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  private orders: Order[] = [];
  constructor() {}
  getOrder() {
    return this.orders;
  }
  setOrder(orders: Order[]) {
    this.orders = orders;
  }
}
