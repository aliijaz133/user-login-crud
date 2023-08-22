import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.scss'],
})
export class UserLoginComponent {
  title = 'user-login';
  userData = {
    userEmail: '',
    userPassword: '',
  };

  userAuth = {
    email: 'aliijaz@gmail.com',
    pwd: 'abcd1234',
  };

  loginForm!: FormGroup;

  constructor(private router: Router) {}

  ngOnInit() {
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
      this.userData.userEmail === this.userAuth.email &&
      this.userData.userPassword === this.userAuth.pwd
    ) {
      console.log('Submitted Successfully...');
      this.router.navigate(['/product-list']);
    } else if (this.userData.userEmail !== this.userAuth.email) {
      alert('Invalid Email');
    } else if (this.userData.userPassword !== this.userAuth.pwd) {
      alert('Invalid Password');
    }
  }
}
