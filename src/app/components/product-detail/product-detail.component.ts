import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from 'src/app/servicesdata/cart.service';
import {
  Product,
  ProductsService,
} from 'src/app/servicesdata/products.service';
import { NgxSpinnerService } from 'ngx-spinner';
@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss'],
})
export class ProductDetailComponent implements OnInit {
  public detailProduct: Product;
  public imgcontainer;
  public imgcurrent = 0;
  constructor(
    public productService: ProductsService,
    public activedRouter: ActivatedRoute,
    public cartService: CartService,
    private spinner: NgxSpinnerService
  ) {}

  ngOnInit(): void {
    this.activedRouter.params.subscribe((p) => {
      this.productService.getFake().subscribe((res) => {
        this.spinner.hide();
        this.detailProduct = this.productService.getDetailProduct(p.id);
        this.imgcontainer = this.detailProduct.images_list[0];
      });
    });
  }

  clickImg(img, index) {
    this.imgcontainer = img;
    this.imgcurrent = index;
  }
}
