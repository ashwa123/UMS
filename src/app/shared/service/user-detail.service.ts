/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from 'src/app/shared/models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserDetailService {

  /**server url declaration */
  url = '/api/Users';

  /**
   * It initialises the user detail service
   * @param http 
   */
  constructor(
    private http: HttpClient
  ) { }

  /**Function to get all users from the server */
  getallUser(): Observable<User | any> {
    return this.http.get(this.url);
  }

  /**Function to delete a user from the server */
  deleteUser(user:any): Observable<any>{
    return this.http.delete(this.url + '/' + user.id);
  }
  /**Function to update the users in the server */
  updateUser(userdata:any, id:any): Observable<any> {
    return this.http.put(this.url + '/' + id, userdata);
  }
  /**Function to add users in the server */
  addUser(userData:any): Observable<any> {
    return this.http.post(this.url, userData);
  }
}
