import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private baseUrl = 'https://reqres.in/';
  constructor() {}
}
