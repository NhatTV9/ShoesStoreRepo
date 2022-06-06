import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { NavigationEnd, Router } from '@angular/router';
import {
  debounceTime,
  distinctUntilChanged,
  filter,
  map,
  switchMap,
  tap,
} from 'rxjs/operators';
import { ProductsService } from 'src/app/servicesdata/products.service';
import { AuthService } from '../../servicesdata/auth.service';
import { CartService } from '../../servicesdata/cart.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  public showDropdown = false;
  public productSearch = [];
  constructor(
    private router: Router,
    private http: HttpClient,
    public authService: AuthService,
    public cartService: CartService,
    private productService: ProductsService
  ) {}
  search = new FormControl('');
  ngOnInit(): void {
    this.search.valueChanges
      .pipe(
        debounceTime(300),
        distinctUntilChanged(),
        map((value: string) => {
          return value.trim();
        }),
        tap((v: string) => {
          if (v === '') {
            this.showDropdown = false;
          }
        }),
        filter((value: string) => value !== '')
      )
      .subscribe((v) => {
        console.log();
        this.productSearch = this.productService.productList.filter((p) => {
          return p.title.includes(v);
        });
        if (this.productSearch) {
          this.showDropdown = true;
        }
      });
  }
  onLogout() {
    this.authService.logout();
    this.router.navigateByUrl('/login');
  }
  public checkNav = false;
  iconNavClick() {
    console.log('click');
    this.checkNav = !this.checkNav;
  }
}
