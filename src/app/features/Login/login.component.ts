import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../core/Auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  hide = true;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
    this.getAllUser();
  }

  getAllUser(): void {
    this.authService.getAllUser();
  }

  login(): void {
    this.authService.login(this.loginForm.value.username, this.loginForm.value.password)
    if (this.authService.isLoggedIn) {
      this.router.navigate(['user']);
    } else {
      alert('Invalid Credentials')
      return;
    }
  }
}
