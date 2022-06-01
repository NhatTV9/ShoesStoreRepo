import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { AuthService } from '../../servicesdata/auth.service';
import { CartService } from '../../servicesdata/cart.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  public showSearch = false;
  constructor(
    private router: Router,
    public authService: AuthService,
    public cartService: CartService
  ) {}
  ngOnInit(): void {}
  onLogout() {
    this.authService.logout();
    this.router.navigateByUrl('/login');
  }
}
