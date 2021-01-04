/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-user-view',
  templateUrl: './user-view.component.html',
  styleUrls: ['./user-view.component.scss']
})
export class UserViewComponent implements OnInit {

  /**Declares user update form */
  userviewForm: FormGroup;
  /**avatar image variable declaration */
  avatarImg = '../../../../assets/avatar.png';

  /**
   * It initialises user view component
   * @param formBuilder 
   * @param dialogRef 
   * @param data 
   */
  constructor(
    private formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<UserViewComponent>,
    @Inject(MAT_DIALOG_DATA) public data
  ) { }

  /**Initialise the user view form */
  ngOnInit(): void {
    this.userviewform()
  }

  /**Initialise the user view form */
  userviewform(): void {
    this.userviewForm = this.formBuilder.group({
      empId: [this.data.user?.empId ? this.data.user.empId : ''],
      username: [this.data.user?.username ? this.data.user.username : ''],
      name: [this.data.user?.name ? this.data.user.name : ''],
      email: [this.data.user?.email ? this.data.user.email : ''],
      designation: [this.data.user?.designation ? this.data.user.designation : ''],
      phone: [this.data.user?.phone ? this.data.user.phone : ''],
    })
  }

}
