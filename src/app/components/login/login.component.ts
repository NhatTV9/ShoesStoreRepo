import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../servicesdata/auth.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { NgxSpinnerService } from 'ngx-spinner';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
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
  constructor(
    private authService: AuthService,
    private router: Router,
    private spinner: NgxSpinnerService
  ) {}

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
  onFormSubmit() {
    let user = {
      email: this.email.value,
      password: this.password.value,
    };
    this.authService.login(user, this.stayLogIn.value).subscribe(
      (res) => {
        this.spinner.hide();
        console.log(this.authService.navigationUrl);

        if (this.authService.navigationUrl == 'checkout') {
          this.router.navigateByUrl('/checkout');
        }
        if (this.authService.navigationUrl == 'tracking') {
          this.router.navigateByUrl('/tracking');
        } else {
          this.router.navigateByUrl('/');
        }
      },
      (err) => {
        this.spinner.hide();
        Swal.fire({
          icon: 'error',
          title: 'LogIn failure',
          html: `${err.error.msg}`,
        });
      }
    );
  }
  fillAccount() {
    this.email.setValue('nga@gmail.com');
    this.password.setValue('Nga12345');
  }
}
