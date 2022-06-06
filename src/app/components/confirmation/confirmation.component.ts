import { Component, OnInit } from '@angular/core';
import { OrderService } from '../../servicesdata/order.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.scss'],
})
export class ConfirmationComponent implements OnInit {
  order = null;
  constructor(
    private orderService: OrderService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    let id = this.route.snapshot.params['id'];
    if (id) {
      this.order = this.orderService.getOrderById(id);
    }
  }
}
