import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
