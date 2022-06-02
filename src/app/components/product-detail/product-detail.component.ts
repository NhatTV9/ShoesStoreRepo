import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from 'src/app/servicesdata/cart.service';
import {
  Product,
  ProductsService,
} from 'src/app/servicesdata/products.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss'],
})
export class ProductDetailComponent implements OnInit {
  public detailProduct: Product;

  constructor(
    public productService: ProductsService,
    public activedRouter: ActivatedRoute,
    public cartService: CartService
  ) {}

  ngOnInit(): void {
    let id = this.activedRouter.params.subscribe((p) => {
      this.detailProduct = this.productService.getDetailProduct(p.id);
      // console.log(this.detailProduct);
    });
  }
  addItem(product) {
    this.cartService.addItem(product);
  }
}
