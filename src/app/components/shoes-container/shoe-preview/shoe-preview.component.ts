import { Component, Input, OnInit } from '@angular/core';
import { ProductsService } from '../../../servicesdata/products.service';
import { CartService } from '../../../servicesdata/cart.service';

@Component({
  selector: 'app-shoe-preview',
  templateUrl: './shoe-preview.component.html',
  styleUrls: ['./shoe-preview.component.scss'],
})
export class ShoePreviewComponent implements OnInit {
  @Input('numberCharater') numberCharater;
  @Input('product') item;
  public products = [];
  constructor(
    private productService: ProductsService,
    private cartService: CartService
  ) {}

  ngOnInit(): void {}
  addItem() {
    this.cartService.addItem(this.item);
  }
}
