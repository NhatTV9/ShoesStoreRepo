import { Injectable } from '@angular/core';

import { Product } from './products.service';
export interface Order {
  item: Product;
  quantity: number;
}
@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cart: Order[] = [];
  public deliveryfee = 50;
  constructor() {
    let token = localStorage.getItem('shoesCart');
    if (token) {
      this.cart = JSON.parse(token);
    }
  }
  getCart() {
    return this.cart;
  }
  removeCart() {
    this.cart = [];
    localStorage.removeItem('shoesCart');
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
  addByQuantity(item, quantity: number) {
    if (quantity) {
      let index = this.cart.findIndex((c) => {
        return c.item.id === item.id;
      });
      this.cart[index].quantity = Number(quantity);
      console.log(this.cart[index]);
      localStorage.setItem('shoesCart', JSON.stringify(this.cart));
    }
  }
  remove(item) {
    let index = this.cart.findIndex((c) => {
      return c.item.id === item.id;
    });
    if (index !== -1) {
      this.cart[index].quantity--;
      if (this.cart[index].quantity === 0) {
        this.cart.splice(index, 1);
      }
    }
    localStorage.setItem('shoesCart', JSON.stringify(this.cart));
  }
  getTotalItems() {
    let totalProduct = 0;
    for (let p of this.cart) {
      totalProduct += p.quantity;
    }
    return totalProduct;
  }
  getQuantityItem(id) {
    let index = this.cart.findIndex((c) => c.item.id === id);
    if (index !== -1) {
      return this.cart[index].quantity;
    }
    return 0;
  }
  deleteItem(item) {
    let index = this.cart.findIndex((c) => {
      return c === item;
    });
    if (index !== -1) {
      this.cart.splice(index, 1);
    }
    localStorage.setItem('shoesCart', JSON.stringify(this.cart));
  }
  getTotalPrice() {
    let total = 0;
    for (let i of this.getCart()) {
      total += i.quantity * Number.parseFloat(i.item.price);
    }
    return total;
  }
}
