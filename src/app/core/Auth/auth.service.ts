import { Injectable } from '@angular/core';
import { UserDetailService } from '../../shared/service/user-detail.service';
import { User } from '../../shared/models/user.model';



@Injectable({
  providedIn: 'root'
})
export class AuthService {

  currentUser: User;

  allUser: User[];

  get isLoggedIn(): boolean {
    return !!this.currentUser;
  }

  constructor(
    private userService: UserDetailService,
  ) { }

  getAllUser(): void {
    this.userService.getallUser().subscribe(users => {
      this.allUser = users;
    });
  }


  login(username: string, password: string): void {
    this.allUser.map((user: User) => {
      if (user.username === username && user.password === password) {
        this.currentUser = user;
      }
    });
  }
}
