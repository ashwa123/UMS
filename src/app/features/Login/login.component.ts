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

  /** Declares loginForm*/
  loginForm: FormGroup;
  /**Eye icon for password */
  hide = true;

  /**
   * It initialises the component
   * @param formBuilder 
   * @param router 
   * @param authService 
   */
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authService: AuthService
  ) { }

  /**
   * It initialises the loginform and calls getAllUser function
   */
  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
    this.getAllUser();
  }

  /**
   * function to get all the users from the server
   */
  getAllUser(): void {
    this.authService.getAllUser();
  }

  /**
   * function to login user
   */
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
