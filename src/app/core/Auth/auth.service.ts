import { Injectable } from '@angular/core';
import { UserDetailService } from '../../shared/service/user-detail.service';
import { User } from '../../shared/models/user.model';



@Injectable({
  providedIn: 'root'
})
export class AuthService {

  /**Declares the current user object */
  currentUser: User;

  /**Declares the object for all users */
  allUser: User[];

  /** function to check whether the user is logged in */
  get isLoggedIn(): boolean {
    return !!this.currentUser;
  }

  /**
   * It initialises the auth service
   * @param userService 
   */
  constructor(
    private userService: UserDetailService,
  ) { }

  /**
   * function to get all the users from the server
   */
  getAllUser(): void {
    this.userService.getallUser().subscribe(users => {
      this.allUser = users;
    });
  }

  /**
   * function to login user
   */
  login(username: string, password: string): void {
    this.allUser.map((user: User) => {
      if (user.username === username && user.password === password) {
        this.currentUser = user;
      }
    });
  }
}
