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
  /**Employee Id of the user */
  empId: any;
  /**Name of the user */
  name: string;
  /**Email of the user */
  email: string;
  /**Phone number of the user */
  phone: number;
}

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {

  /**Declares variable for logged in user */
  currentUser: any;
  /**Variable declaration to check whether the logged in user is admin */
  isAdmin: boolean;
  /**Variable declaration to store all the users*/
  userdetails: UserData[];
  /**Table column variable declaration */
  displayedColumns = ['empId', 'name', 'username', 'email', 'phone', 'edit', 'delete'];
  /**avatar image variable declaration */
  avatarImg = '../../../../assets/avatar.png';
  /**User form declaration */
  userForm: FormGroup;
  /**Variable declaration to decide to display or edit user*/
  userEdit = false;
  /**Table column variable declaration */
  userdetailsList: any[];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  
  /**
   * It initialises the user detail component
   * @param authService 
   * @param userService 
   * @param dialog 
   * @param formBuilder 
   */
  constructor(
    private authService: AuthService,
    private userService: UserDetailService,
    public dialog: MatDialog,
    private formBuilder: FormBuilder,
    
  ) { }

  /**
   * Defines the current user and initialises the user update form and calls getAllUser function
   */
  ngOnInit(): void {
    this.currentUser = this.authService.currentUser;
    this.userDataForm();
    this.getallUser();
  }
  
  /**Initialises the user update form */
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

    /**
   * function to get all the users from the server
   */
  getallUser(): void {
    this.userService.getallUser().subscribe((users: any) => {
      this.userdetails = users;
      this.paginate({pageIndex: 0, pageSize: 5})
    });
  }

  /**Function to open the EditUserComponent in a dialog box */
  edit(user: unknown): void {
    const dialogRef = this.dialog.open(EditUserComponent, {
      data: {user, isEdit: true}
    });

    dialogRef.afterClosed().subscribe(() => {
      this.getallUser();
    });
  }

  /**Function to open the UserViewComponent in a dialog box */
  view(user: unknown): void {
    const dialogRef = this.dialog.open(UserViewComponent, {
      data: {user}
    });

    dialogRef.afterClosed().subscribe(() => {
      this.getallUser();
    });
  }

  /**Function to open the EditUserComponent in a dialog box */
  add(): void {
    const dialogRef = this.dialog.open(EditUserComponent, {
      data: {isEdit: false}
    });

    dialogRef.afterClosed().subscribe(() => {
      this.getallUser();
    });
  }

  /**Function to delete the user */
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

  /**Function to update the user details */
  save(): void {
    this.userService.updateUser(this.userForm.value, this.currentUser.id).subscribe(response => {
      if (response) {
        this.getallUser();
        this.userEdit = false;
      }
    });
  }

  
  
  /**
   * Function to define the pagination
   * @param event 
   */
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

