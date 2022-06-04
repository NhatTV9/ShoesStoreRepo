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
    for (let i of this.cartService.getCart()) {
      total += i.quantity * Number.parseFloat(i.item.price);
    }
    return total;
  }
  onKeyup(event, item) {
    const inputValue = event.target.value;
    this.cartService.addByQuantity(item, inputValue);
  }
}
