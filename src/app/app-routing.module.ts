import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ShoeCategoryComponent } from './components/shoe-category/shoe-category.component';
import { ShoesContainerComponent } from './components/shoes-container/shoes-container.component';
import { HomeComponent } from './components/home/home/home.component';
import { LoginComponent } from './components/login/login.component';

import { ProductDetailComponent } from './components/product-detail/product-detail.component';

import { ContactComponent } from './components/contact/contact.component';
import { TrackingComponent } from './components/tracking/tracking.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { ConfirmationComponent } from './components/confirmation/confirmation.component';
import { SigupComponent } from './components/sigup/sigup.component';
import { AuthGuard } from './guards/auth.guard';
import { CheckEditModeGuard } from './guards/check-edit-mode.guard';
import { OrderListComponent } from './components/order-list/order-list.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'categories',
    component: ShoeCategoryComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'productDetail/:id',
    component: ProductDetailComponent,
  },
  {
    path: 'contact',
    component: ContactComponent,
  },
  {
    path: 'tracking',
    component: TrackingComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'shopping-cart',
    component: ShoppingCartComponent,
  },
  {
    path: 'checkout',
    component: CheckoutComponent,
    canActivate: [AuthGuard],
    canDeactivate: [CheckEditModeGuard],
  },
  {
    path: 'confirmation/:id',
    component: ConfirmationComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'sigup',

    component: SigupComponent,
  },
  {
    path: 'order-list',
    component: OrderListComponent,
    canActivate: [AuthGuard],
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
