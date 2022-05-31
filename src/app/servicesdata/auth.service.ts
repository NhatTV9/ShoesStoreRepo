import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private baseUrl = 'https://jobs-api-06.herokuapp.com/api/v1/auth/register';
  constructor(private http: HttpClient) {}
}
