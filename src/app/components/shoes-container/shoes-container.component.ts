import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/servicesdata/products.service';

@Component({
  selector: 'app-shoes-container',
  templateUrl: './shoes-container.component.html',
  styleUrls: ['./shoes-container.component.scss'],
})
export class ShoesContainerComponent implements OnInit {
  public products;
  constructor(private productService: ProductsService) {}

  ngOnInit(): void {
    this.products = this.productService.getProduct(8);
  }
}
