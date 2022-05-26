import { Injectable } from '@angular/core';
import data from '../../assets/amazon_uk_shoes_dataset.json';
export interface Feature {
  'Outer Material': string;
  ' Inner Material': string;
  Sole: string;
  Closure: string;
  'Heel Height': string;
  'Heel Type': string;
  'Shoe Width': string;
  'Material Composition': string;
}

export interface Product {
  url: string;
  title: string;
  asin: string;
  price: string;
  brand: string;
  product_details: string;
  breadcrumbs: string;
  images_list: string[];
  features: Feature[];
}
@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private products = data;
  constructor() {}
  getData(number) {
    let productList = [];
    for (let i = 0; i < number; i++) {
      productList.push(this.products[i]);
    }
    return productList;
  }
  getDataProduct(): Product {
    return this.products[3];
  }
}
