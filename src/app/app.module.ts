import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { ShoesContainerComponent } from './components/shoes-container/shoes-container.component';
import { ShoePreviewComponent } from './components/shoes-container/shoe-preview/shoe-preview.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ShoeCategoryComponent } from './components/shoe-category/shoe-category.component';
import { LoginComponent } from './components/login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { TextcustomPipe } from './pipes/textcustom.pipe';
import { TrackingComponent } from './components/tracking/tracking.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { ConfirmationComponent } from './components/confirmation/confirmation.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DealWeekComponent } from './components/deal-week/deal-week.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SigupComponent } from './components/sigup/sigup.component';
import { NgxSpinnerModule } from 'ngx-spinner';
import { OrderListComponent } from './components/order-list/order-list.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    FooterComponent,
    ShoesContainerComponent,
    ShoePreviewComponent,
    NotFoundComponent,
    ShoeCategoryComponent,
    LoginComponent,
    ProductDetailComponent,
    TextcustomPipe,
    TrackingComponent,
    ShoppingCartComponent,
    CheckoutComponent,
    ConfirmationComponent,
    DealWeekComponent,
    SigupComponent,
    OrderListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxSpinnerModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
