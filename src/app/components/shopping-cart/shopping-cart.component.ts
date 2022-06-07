import { Component, OnInit } from '@angular/core';
import { CartService } from '../../servicesdata/cart.service';
import { NgxSpinnerService } from 'ngx-spinner';
import {
  Product,
  ProductsService,
} from 'src/app/servicesdata/products.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss'],
})
export class ShoppingCartComponent implements OnInit {
  public cartProduct = [];
  constructor(
    public cartService: CartService,
    private spinner: NgxSpinnerService,
    private productService: ProductsService
  ) {}

  ngOnInit(): void {
    this.productService.getFake().subscribe((p) => {
      this.cartProduct = this.cartService.getCart();
      this.spinner.hide();
    });
  }
}
