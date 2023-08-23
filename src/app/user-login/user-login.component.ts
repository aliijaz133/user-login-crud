import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.scss'],
})
export class UserLoginComponent {
  title: string;

  userAuth = {
    email: 'aliijaz@gmail.com',
    pwd: 'abcd1234',
  };

  loginForm: FormGroup;

  constructor(private router: Router) {
    this.title = 'user-login';
    this.loginForm = new FormGroup({
      userEmail: new FormControl('', [Validators.required, Validators.email]),
      userPwd: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
      ]),
    });
  }

  submitForm() {
    if (
      this.userAuth.email === this.loginForm.controls['userEmail'].value &&
      this.userAuth.pwd === this.loginForm.controls['userPwd'].value
    ) {
      this.router.navigate(['/product-list']);
    } else if (
      this.userAuth.email !== this.loginForm.controls['userEmail'].value
    ) {
      alert('Invalid Email');
    } else if (this.userAuth.pwd !== this.loginForm.controls['userPwd'].value) {
      alert('Invalid Password');
    }
  }
}
