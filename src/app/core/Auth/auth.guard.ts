/* eslint-disable @typescript-eslint/no-unused-vars */
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})

export class AuthGuard implements CanActivate {
  
  /**
   * It initialises the Auth guard
   * @param router 
   * @param authService 
   */
  constructor(
    private router: Router,
    private authService: AuthService
    ) {}

  /**
   * method to check the activation of routes
   * @param next 
   * @param state 
   */ 
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.checkLoggedIn();
  }

  /**
   * function to check whether the user is logged in
   */
  checkLoggedIn(): boolean {
    if (this.authService.isLoggedIn) {
      return true;
    } else {
      this.router.navigate(['login']);
      return false;
    }
  }

}
