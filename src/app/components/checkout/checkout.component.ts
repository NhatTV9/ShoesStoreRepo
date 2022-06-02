import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../servicesdata/auth.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss'],
})
export class CheckoutComponent implements OnInit {
  constructor(public authService: AuthService) {}

  ngOnInit(): void {}
}
