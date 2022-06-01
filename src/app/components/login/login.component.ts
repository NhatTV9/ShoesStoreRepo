import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../servicesdata/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  user = {
    email: 'nga@gmail.com',
    password: 'Nga12345',
  };
  loginForm = new FormGroup({
    email: new FormControl('', [
      Validators.required,
      Validators.pattern('^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?w+)*(\\.\\w{2,3})+$'),
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
      Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)[a-zA-Z\\d]{8,}$'),
    ]),
    stayLogIn: new FormControl(false, []),
  });
  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {}
  get email() {
    return this.loginForm.get('email');
  }
  get password() {
    return this.loginForm.get('password');
  }
  get stayLogIn() {
    return this.loginForm.get('stayLogIn');
  }
  test() {}
  onFormSubmit() {
    this.authService.login(this.user, this.stayLogIn.value).subscribe((res) => {
      // console.log(res);
      this.router.navigateByUrl('/');
    });
  }
}
