import { Component, OnInit } from '@angular/core';
import { CartService } from '../../servicesdata/cart.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss'],
})
export class ShoppingCartComponent implements OnInit {
  public total = 0;
  constructor(public cartService: CartService) {
    console.log(this.cartService.getCart());
    for (let i of this.cartService.getCart()) {
      console.log(typeof i.item.price);
      this.total += i.quantity * Number.parseFloat(i.item.price);
    }
  }

  ngOnInit(): void {}
}
