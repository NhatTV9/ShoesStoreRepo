import { Injectable } from '@angular/core';
import data from '../../assets/mockData';
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
  id?: number;
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
  private productList: Product[] = [];
  private totalProducts: Product[] = <Product[]>data.map((p, i) => {
    p['id'] = i;
    return p;
  });

  constructor() {}
  getProduct(number) {
    let arr = [];
    for (let i = 0; i < number; i++) {
      arr.push(this.totalProducts[i]);
    }
    this.productList = arr;
    return this.productList;
  }

  getDetailProduct(id): Product {
    let index = this.totalProducts.findIndex((p) => p.id == id);
    if (index >= 0) {
      return this.productList[index];
    }
  }
  getNumberPage(numberItem) {
    return this.totalProducts.length / numberItem;
  }
}
