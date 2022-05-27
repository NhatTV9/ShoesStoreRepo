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
  constructor(private productService: ProductsService) {}
  ngOnInit(): void {
    this.products = this.productService.getProduct(this.show);
    this.getPages();
  }
  sort(value) {
    this.show = value;
    this.products = this.productService.getProduct(this.show);
    this.getPages();
  }
  getPages() {
    let ps = this.productService.getNumberPage(this.show);
    for (let i = 1; i < ps + 2; i++) {
      this.pages.push(i);
    }
    console.log(ps);
    console.log(this.pages);
  }
}
// (click)="goToPage(page)"
// [class.active]="currentPage == page"
