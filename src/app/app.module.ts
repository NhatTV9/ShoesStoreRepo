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
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
