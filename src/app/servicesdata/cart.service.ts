import { Injectable } from '@angular/core';
import { Product } from './products.service';
export interface CartItem {
  item: Product;
  quantity: number;
}
@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cart: CartItem[] = [];
  constructor() {}
  getCart() {
    return this.cart;
  }
  addItem(item) {
    let index = this.cart.findIndex((c) => {
      return c.item.id === item.id;
    });
    if (index === -1) {
      this.cart.push({
        item: item,
        quantity: 1,
      });
    } else {
      this.cart[index].quantity++;
    }
    localStorage.setItem('shoesCart', JSON.stringify(this.cart));
  }
  remove(item) {
    let index = this.cart.findIndex((c) => {
      return c.item.id === item.id;
    });
    if (index !== -1) {
      this.cart[index].quantity--;
      if (this.cart[index].quantity-- === 0) {
        this.cart.splice(index, 1);
      }
    }
  }
  getTotalItems() {
    return this.cart.length;
  }
}
