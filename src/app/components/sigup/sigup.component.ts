import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/servicesdata/auth.service';
import Swal from 'sweetalert2';
import { NgxSpinnerService } from 'ngx-spinner';
@Component({
  selector: 'app-sigup',
  templateUrl: './sigup.component.html',
  styleUrls: ['./sigup.component.scss'],
})
export class SigupComponent implements OnInit {
  createAccount = new FormGroup({
    name: new FormControl('', [
      Validators.required,
      Validators.minLength(1),
      Validators.pattern("^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$"),
    ]),
    email: new FormControl('', [
      Validators.required,
      Validators.pattern(
        '^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$'
      ),
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)[a-zA-Z\\d]{8,}$'),
    ]),
    passwordConfirm: new FormControl('', [
      Validators.required,
      Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)[a-zA-Z\\d]{8,}$'),
    ]),
  });

  constructor(
    private router: Router,
    private authService: AuthService,
    private spinner: NgxSpinnerService
  ) {}
  ngOnInit(): void {}
  get name() {
    return this.createAccount.get('name');
  }
  get email() {
    return this.createAccount.get('email');
  }
  get password() {
    return this.createAccount.get('password');
  }
  get passwordConfirm() {
    return this.createAccount.get('passwordConfirm');
  }
  get f() {
    return this.createAccount;
  }
  onBlur() {
    console.log(this.email);
  }
  submit() {
    if (this.f.value.password != this.f.value.passwordConfirm) {
      Swal.fire({
        icon: 'error',
        title: 'Sigup failure',
        html: ``,
      });
    } else {
      let user = {
        name: this.f.value.name,
        email: this.f.value.email,
        password: this.f.value.password,
      };

      this.authService.sigup(user).subscribe(
        (data) => {
          this.spinner.hide();
          Swal.fire({
            icon: 'success',
            title: 'Sigup succesful',
          });
        },
        (err) => {
          this.spinner.hide();
          Swal.fire({
            icon: 'error',
            title: 'Sigup failure',
            html: `${err.error.msg}`,
          });
        }
      );
    }
  }
}
