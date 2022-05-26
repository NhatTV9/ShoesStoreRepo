import { Component, OnInit } from '@angular/core';
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

  constructor(public productService: ProductsService) {}

  ngOnInit(): void {
    this.detailProduct = this.productService.getDataProduct();
    console.log(this.detailProduct);
  }
}
