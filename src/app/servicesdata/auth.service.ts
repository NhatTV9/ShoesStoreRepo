import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';
export interface User {
  _id: string;
  name: string;
  email: string;
  lastName: string;
  location: string;
  __v: number;
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
  public user = null;
  private savedToken = 'token';
  constructor(private http: HttpClient) {}
  login(user, stayLogIn) {
    return this.http.post(`${this.baseUrl}/auth/login`, user).pipe(
      tap((res: UserRespone) => {
        this.user = res.user;
        if (stayLogIn) {
          localStorage.setItem(this.savedToken, res.token);
        }
      })
    );
  }
  sigup(user) {
    return this.http.post(`${this.baseUrl}/auth/register`, user);
  }
}
