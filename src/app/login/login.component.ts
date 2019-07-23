import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { RestService } from '../services/rest.service';
import { environment } from 'src/environments/environment';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  errorMessage: string;

  constructor(private readonly rest: RestService, private readonly fb: FormBuilder,
    private readonly auth: AuthService,
    private readonly route: Router) {
    this.loginForm = this.fb.group({
      email: '',
      password: ''
    })
  }

  loginForm: FormGroup;

  ngOnInit() {
    this.loginForm = new FormGroup({
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'password': new FormControl(null, Validators.required)
    });
  }

  onSubmit() {
    const form = this.loginForm.value;
    console.log("Login Successful")
    return this.rest.get(environment.apiURL + `/users?email=${form.email}&password=${form.password}`)
    .then(res => {
      if (res[0]) {
        const userId = res[0].id;
        this.auth.setUserId(userId);
        this.route.navigate(['/users']);
      } else {
        this.errorMessage = "Invalid Username or Password";
      }
      
    });
  }

}
