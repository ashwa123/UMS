/* eslint-disable @typescript-eslint/no-explicit-any */
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from 'src/app/shared/models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserDetailService {

  url = '/api/Users';

  constructor(
    private http: HttpClient
  ) { }


  getallUser(): Observable<User | any> {
    return this.http.get(this.url);
  }

  deleteUser(user): Observable<any>{
    return this.http.delete(this.url + '/' + user.id);
  }

  updateUser(userdata, id): Observable<any> {
    return this.http.put(this.url + '/' + id, userdata);
  }

  addUser(userData): Observable<any> {
    return this.http.post(this.url, userData);
  }
}
