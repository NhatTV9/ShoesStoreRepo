import { Component, Input, OnInit } from '@angular/core';
import { NgbRatingConfig } from '@ng-bootstrap/ng-bootstrap';
import { ProductsService } from '../../../servicesdata/products.service';
import { CartService } from '../../../servicesdata/cart.service';

@Component({
  selector: 'app-shoe-preview',
  templateUrl: './shoe-preview.component.html',
  styleUrls: ['./shoe-preview.component.scss'],
  providers: [NgbRatingConfig],
})
export class ShoePreviewComponent implements OnInit {
  @Input('numberCharater') numberCharater;
  @Input('product') item;
  rate = Math.floor(Math.random() * 4 + 2);
  public products = [];
  constructor(
    private productService: ProductsService,
    private cartService: CartService,
    config: NgbRatingConfig
  ) {
    config.max = 5;
    config.readonly = true;
  }

  ngOnInit(): void {}
  addItem() {
    this.cartService.addItem(this.item);
  }
}
