import { Injectable } from '@angular/core';
import { Order } from './cart.service';
import { AuthService, Contact } from './auth.service';
export interface OrderedItem {
  items: Order[];
  id: string;
  date: Date;
  totalPrice: number;
  userEmail: string;
  paymentMethod: string;
  contact: Contact;
}
@Injectable({
  providedIn: 'root',
})
export class OrderService {
  private orders: OrderedItem[] = [];
  constructor(private authService: AuthService) {}
  getOrders() {
    return this.orders;
  }
  setOrder(orders: Order[], totalprice, paymentmethod) {
    let uniq = 'id' + new Date().getTime();
    this.orders.push({
      items: orders,
      date: new Date(),
      totalPrice: totalprice,
      paymentMethod: paymentmethod,
      id: uniq,
      userEmail: this.authService.user.email,
      contact: this.authService.user.contact,
    });
    localStorage.setItem('orders', JSON.stringify(this.orders));
    return uniq;
  }
  getOrderById(id: string) {
    let orders = localStorage.getItem('orders');
    if (orders) {
      return JSON.parse(orders).filter((p) => p.id === id)[0];
    }
  }
  getOrdersByEmail() {
    if (this.authService.isLogin()) {
      let orders = localStorage.getItem('orders');
      if (orders) {
        return JSON.parse(orders).filter(
          (p) => p.userEmail === this.authService.user.email
        );
      }
    }
  }
}
