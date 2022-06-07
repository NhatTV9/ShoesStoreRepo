import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { NgxSpinnerService } from 'ngx-spinner';
export interface User {
  _id: string;
  name: string;
  email: string;
  lastName: string;
  location: string;
  paymentMethod?: string;
  contact?: Contact;
  __v: number;
}
export interface Contact {
  address: string;
  city: string;
  country: string;
  phoneNumber: string;
  postcode: string;
  firstName: string;
  lastName: string;
}
export interface UserRespone {
  user: User;
  token: string;
  location: string;
}

export interface UserRespone {
  user: User;
  token: string;
  location: string;
}
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private baseUrl = 'https://jobify-prod.herokuapp.com/api/v1';
  public user: User = null;
  private savedToken = 'token';
  public navigationUrl = '';
  constructor(private http: HttpClient, private spinner: NgxSpinnerService) {
    let token = localStorage.getItem(this.savedToken);
    if (token) {
      this.user = JSON.parse(token);
    }
  }
  set contact(contact) {
    this.user.contact = contact;
    localStorage.setItem(this.savedToken, JSON.stringify(this.user));
  }
  login(user, stayLogIn) {
    this.spinner.show();
    return this.http.post(`${this.baseUrl}/auth/login`, user).pipe(
      tap((res: UserRespone) => {
        this.user = res.user;
        if (stayLogIn) {
          localStorage.setItem(this.savedToken, JSON.stringify(res.user));
        }
      })
    );
  }
  sigup(user) {
    this.spinner.show();
    return this.http.post(`${this.baseUrl}/auth/register`, user);
  }
  isLogin() {
    return !!this.user;
  }
  logout() {
    this.user = null;
    localStorage.removeItem(this.savedToken);
  }
}
