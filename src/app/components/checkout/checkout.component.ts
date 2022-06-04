import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../servicesdata/auth.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss'],
})
export class CheckoutComponent implements OnInit {
  constructor(public authService: AuthService, private router: Router) {}
  ngOnInit(): void {
    console.log(this.authService.isLogin());

    if (!this.authService.isLogin()) {
      this.router.navigateByUrl('/login');
    }
  }
}
