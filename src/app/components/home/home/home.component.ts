import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/servicesdata/products.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(private productService: ProductsService) {}
  ngOnInit(): void {}
  images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);
}
