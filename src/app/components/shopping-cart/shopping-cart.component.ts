import { Component, OnInit } from '@angular/core';
import { CartService } from '../../servicesdata/cart.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss'],
})
export class ShoppingCartComponent implements OnInit {

  deliveryfee = 50;
  constructor(public cartService: CartService) {}

  ngOnInit(): void {}
  getTotalPrice() {
    let total = 0;
  public total = 0;
  constructor(public cartService: CartService) {
    for (let i of this.cartService.getCart()) {
      total += i.quantity * Number.parseFloat(i.item.price);
    }
    return total;
  }

  ngOnInit(): void {}
  ngOnChanges() {
    for (let i of this.cartService.getCart()) {
      console.log(typeof i.item.price);
      this.total += i.quantity * Number.parseFloat(i.item.price);
    }
  }
}
