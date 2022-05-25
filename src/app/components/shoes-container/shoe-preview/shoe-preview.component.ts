import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../../servicesdata/products.service';

@Component({
  selector: 'app-shoe-preview',
  templateUrl: './shoe-preview.component.html',
  styleUrls: ['./shoe-preview.component.scss'],
})
export class ShoePreviewComponent implements OnInit {
  public products = [];
  constructor(private productService: ProductsService) {}

  ngOnInit(): void {
    this.products = this.productService.getData(12);
    console.log(this.productService.getData(12));
  }
}
