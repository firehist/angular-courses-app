import { Router } from '@angular/router';
import { AuthService } from './../../../shared/services/auth.service';
import { freeEmail } from '../../../shared/validators/user.validators';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-auth-login',
  templateUrl: './auth-login.component.html',
  styleUrls: ['./auth-login.component.css']
})
export class AuthLoginComponent {

  loginForm: FormGroup

  constructor(
    private _authService: AuthService,
    private _router: Router,
    _fb: FormBuilder
  ) {
    this.loginForm = _fb.group({
      email: ['firehist@gmail.com', Validators.email, freeEmail],
      password: ['1234567890', Validators.minLength(6)]
    })
  }

  onSubmit() {
    if (this.loginForm.valid) {
      const formValue = this.loginForm.getRawValue()
      this._authService.login(formValue.email, formValue.password)
      this._router.navigateByUrl('/products')
    }
  }

}
