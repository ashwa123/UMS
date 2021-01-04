/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AuthService } from '../../../core/Auth/auth.service';
import { UserDetailService } from '../../../shared/service/user-detail.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss']
})
export class EditUserComponent implements OnInit {

  /**Declares user update form */
  updateForm: FormGroup;

  /**Declares variable for logged in user */
  CurrentUser: any;

  /**
   * It initialises the edit user component
   * @param formBuilder 
   * @param authService 
   * @param userService 
   * @param dialogRef 
   * @param data 
   */
  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private userService: UserDetailService,
    public dialogRef: MatDialogRef<EditUserComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
    ) {}

    /**
     * Defines the current user and initialises the update form
     */
  ngOnInit(): void {
    this.CurrentUser = this.authService.currentUser;
    this.updateform();
  }

  /**
   * Initialises the update form
   */
  updateform(): void {
    this.updateForm = this.formBuilder.group({
      empId: [this.data.user?.empId ? this.data.user.empId : ''],
      username: [this.data.user?.username ? this.data.user.username : ''],
      name: [this.data.user?.name ? this.data.user.name : ''],
      email: [this.data.user?.email ? this.data.user.email : ''],
      phone: [this.data.user?.phone ? this.data.user.phone : '']
    });
  }

  /**
   * function to update the user details
   */
  update(): void {
    this.userService.updateUser(this.updateForm.value, this.data.user.id).subscribe(response => {
      this.dialogRef.close();
      if (response) {
        console.log(response);
      } else {
        console.log('Unsuccessful');
      }
    });
  }

  /**
   * function to add new user
   */
  add(): void {
    this.userService.addUser(this.updateForm.value).subscribe(response => {
      this.dialogRef.close();
      if (response) {
        console.log(response);
      } else {
        console.log('Unsuccessful');
      }
    });
  }

  /**
   * function display add button or edit button
   */
  addOrEdit(): void {
    if (this.data?.isEdit) {
      this.update();
    } else {
      this.add();
    }
  }
}
