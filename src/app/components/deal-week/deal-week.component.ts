import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/servicesdata/products.service';

@Component({
  selector: 'app-deal-week',
  templateUrl: './deal-week.component.html',
  styleUrls: ['./deal-week.component.scss'],
})
export class DealWeekComponent implements OnInit {
  public productDeal;
  constructor(private productService: ProductsService) {}

  ngOnInit(): void {
    this.productDeal = this.productService.getDealsWeek(9);
  }
}
