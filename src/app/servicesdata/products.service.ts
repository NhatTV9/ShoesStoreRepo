import { Injectable } from '@angular/core';
import data from '../../assets/amazon_uk_shoes_dataset.json';
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
}
