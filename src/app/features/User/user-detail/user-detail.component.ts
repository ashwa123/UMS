/* eslint-disable @typescript-eslint/no-explicit-any */
import { Component, OnInit, ViewChild } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';

import { AuthService } from '../../../core/Auth/auth.service';
import { UserDetailService } from '../../../shared/service/user-detail.service';
import { EditUserComponent } from '../edit-user/edit-user.component';
import { UserViewComponent } from '../user-view/user-view.component';


export interface UserData {
  empId: any;
  name: string;
  email: string;
  phone: number;
}

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {

  currentUser: any;
  isAdmin: boolean;
  userdetails: UserData[]
  displayedColumns = ['empId', 'name', 'username', 'email', 'phone', 'edit', 'delete'];
  avatarImg = '../../../../assets/avatar.png';
  userForm: FormGroup;
  userEdit = false;
  userdetailsList: any[];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  

  constructor(
    private authService: AuthService,
    private userService: UserDetailService,
    public dialog: MatDialog,
    private formBuilder: FormBuilder,
    
  ) { }

  ngOnInit(): void {
    this.currentUser = this.authService.currentUser;
    this.userDataForm();
    this.getallUser();
  }

  userDataForm(): void {
    this.userForm = this.formBuilder.group({
      empId: [this.currentUser?.empId ? this.currentUser.empId : ''],
      username: [this.currentUser?.username ? this.currentUser.empId : ''],
      password: [this.currentUser?.password ? this.currentUser.password : ''],
      name: [this.currentUser?.name ? this.currentUser.name : ''],
      email: [this.currentUser?.email ? this.currentUser.email : ''],
      phone: [this.currentUser?.phone ? this.currentUser.phone : '']
    });
  }

  getallUser(): void {
    this.userService.getallUser().subscribe((users: any) => {
      this.userdetails = users;
      this.paginate({pageIndex: 0, pageSize: 5})
    });
  }

  edit(user: unknown): void {
    const dialogRef = this.dialog.open(EditUserComponent, {
      data: {user, isEdit: true}
    });

    dialogRef.afterClosed().subscribe(() => {
      this.getallUser();
    });
  }

  view(user: unknown): void {
    const dialogRef = this.dialog.open(UserViewComponent, {
      data: {user}
    });

    dialogRef.afterClosed().subscribe(() => {
      this.getallUser();
    });
  }

  add(): void {
    const dialogRef = this.dialog.open(EditUserComponent, {
      data: {isEdit: false}
    });

    dialogRef.afterClosed().subscribe(() => {
      this.getallUser();
    });
  }

  delete(row: unknown): void {
    confirm('Are you sure you want to delete the record?')
    this.userService.deleteUser(row).subscribe(response => {
      if (response) {
        this.getallUser();
      } else {
        console.log('Unsuccessful');
      }
    });
  }

  save(): void {
    this.userService.updateUser(this.userForm.value, this.currentUser.id).subscribe(response => {
      if (response) {
        this.getallUser();
        this.userEdit = false;
      }
    });
  }

  
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  paginate(event) {
    const startIndex = event.pageIndex * event.pageSize;
    let endIndex = startIndex + event.pageSize;
    if(endIndex > this.userdetails){
      endIndex = this.userdetails;
    }
    this.userdetailsList = this.userdetails.slice(startIndex, endIndex);
  }
}

