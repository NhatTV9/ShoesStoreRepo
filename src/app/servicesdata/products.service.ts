import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import data from '../../assets/mockData';
import { NgxSpinnerService } from 'ngx-spinner';
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
  private totalProducts: Product[] = <Product[]>data.map((p, i) => {
    p['id'] = i;
    if (p.price) {
      p.price = Number.parseFloat(p.price.slice(1, p.price.indexOf('-')));
    } else {
      p.price = 51.25;
    }
    return p;
  });
  public productList: Product[] = this.totalProducts;
  public categories = this.getCategories();

  constructor(private http: HttpClient, private spinner: NgxSpinnerService) {}
  getFake() {
    this.spinner.show();
    return this.http.get('https://fakestoreapi.com/products').pipe();
  }
  getProduct(numberStart, numberEnd) {
    let arr = [];
    this.spinner.show();
    this.http
      .get('https://fakestoreapi.com/products')
      .pipe(
        tap((res) => {
          if (numberEnd >= this.productList.length) {
            for (let i = numberStart; i < this.productList.length; i++) {
              arr.push(this.productList[i]);
            }
            return arr;
          } else {
            for (let i = numberStart; i < numberEnd; i++) {
              arr.push(this.productList[i]);
            }
          }
        })
      )
      .subscribe((res) => {
        this.spinner.hide();
      });

    return arr;
  }

  getDetailProduct(id): Product {
    let index = this.totalProducts.findIndex((p) => p.id == id);
    if (index >= 0) {
      return this.totalProducts[index];
    }
  }

  getDealsWeek(numberItem) {
    let arr = [];
    for (
      let i = this.totalProducts.length - 1;
      i > this.totalProducts.length - numberItem - 1;
      i--
    ) {
      arr.push(this.totalProducts[i]);
    }
    return arr;
  }
  getCategories() {
    let categories = [];
    for (let product of this.totalProducts) {
      let category = product.breadcrumbs.split('/');
      if (category) {
        for (let i = 1; i < category.length; i++) {
          const found = categories.some((el) => el.category === category[i]);
          if (!found) {
            categories.push({ category: category[i], quantity: 1 });
          } else {
            categories.map((p) => {
              if (p.category == category[i]) {
                p.quantity++;
              }
            });
          }
        }
      }
    }
    return categories;
  }
  getProductCate(number, value) {
    let arr = [];
    let count = 0;
    for (let i = 0; i < this.totalProducts.length; i++) {
      if (this.totalProducts[i].breadcrumbs.indexOf(value) != -1) {
        arr.push(this.totalProducts[i]);
        count++;
      }
      if (count >= number) {
        break;
      }
    }
    return arr;
  }
  getAllProductCategory(value) {
    let arr = [];

    for (let i = 0; i < this.totalProducts.length; i++) {
      if (this.totalProducts[i].breadcrumbs.indexOf(value) != -1) {
        arr.push(this.totalProducts[i]);
      }
    }
    return arr;
  }
}
