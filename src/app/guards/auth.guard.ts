import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  ActivatedRoute,
} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../servicesdata/auth.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(
    private authService: AuthService,
    private router: Router,
    private activatedRouter: ActivatedRoute
  ) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    if (!this.authService.isLogin()) {
      this.router.navigateByUrl('/login');
      console.log(next);
      this.authService.navigationUrl = next.routeConfig.path;
      return false;
    }
    return true;
  }
}
