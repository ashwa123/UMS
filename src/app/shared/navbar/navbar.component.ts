/* eslint-disable @typescript-eslint/no-explicit-any */
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../core/Auth/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  /**Declares variable for logged in user */
  currentUser: any;

  /**
   * It initialises the nav bar component
   * @param authService 
   * @param router 
   */
  constructor(
    private authService: AuthService,
    private router: Router
    ) { }

  /**stores the logged in user in current user variable */
  ngOnInit(): void {
    this.currentUser = this.authService.currentUser;
  }
  /**Function for log out */
  logout(): void {
    this.authService.currentUser = null;
    this.router.navigate(['/login'])
  }

}
