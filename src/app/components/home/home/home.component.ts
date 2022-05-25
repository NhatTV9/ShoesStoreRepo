import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/servicesdata/products.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public products = [];
  constructor(private productService: ProductsService) {}
  ngOnInit(): void {
    this.products = this.productService.getData(16);
    console.log(this.productService.getData(12));
  }
}
