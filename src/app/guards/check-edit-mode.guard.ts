import { Injectable } from '@angular/core';
import {
  CanDeactivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { CheckoutComponent } from '../components/checkout/checkout.component';

@Injectable({
  providedIn: 'root',
})
export class CheckEditModeGuard implements CanDeactivate<CheckoutComponent> {
  canDeactivate(
    component: CheckoutComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    if (!component.continueCheckout) {
      if (confirm('Are you sure you want to cancel?') == false) {
        return false;
      }
    }
    return true;
  }
}
