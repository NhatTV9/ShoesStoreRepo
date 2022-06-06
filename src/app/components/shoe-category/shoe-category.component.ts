import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../servicesdata/products.service';

@Component({
  selector: 'app-shoe-category',
  templateUrl: './shoe-category.component.html',
  styleUrls: ['./shoe-category.component.scss'],
})
export class ShoeCategoryComponent implements OnInit {
  public products;
  public shows = [24, 30];
  public show = 12;
  public pages = [];
  public page = 1;
  public showSileBar = true;

  constructor(public productService: ProductsService) {}
  ngOnInit(): void {
    this.products = this.productService.getProduct(0, this.show);
  }
  sort(value) {
    this.show = value;
    this.products = this.productService.getProduct(0, this.show);
  }
  handleChange(e) {
    this.products = this.productService.getProductCate(this.show, e);
    this.productService.productList =
      this.productService.getAllProductCategory(e);
  }
  next(e) {
    if (e == 1) {
      this.products = this.productService.getProduct(0, this.show);
    } else {
      this.products = this.productService.getProduct(
        (e - 1) * this.show,
        (e - 1) * this.show + this.show
      );
    }
  }
}
