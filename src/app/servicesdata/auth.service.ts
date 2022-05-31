import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private baseUrl = 'https://jobs-api-06.herokuapp.com/api/v1';
  constructor(private http: HttpClient) {}

  sigup(user) {
    return this.http.post(`${this.baseUrl}/auth/register`, user);
  }
}
