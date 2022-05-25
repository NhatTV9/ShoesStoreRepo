import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../servicesdata/products.service';

@Component({
  selector: 'app-shoe-category',
  templateUrl: './shoe-category.component.html',
  styleUrls: ['./shoe-category.component.scss'],
})
export class ShoeCategoryComponent implements OnInit {
  public products = [];
  constructor(private productService: ProductsService) {}

  ngOnInit(): void {
    this.products = this.productService.getData(12);
    console.log(this.productService.getData(12));
  }
}
