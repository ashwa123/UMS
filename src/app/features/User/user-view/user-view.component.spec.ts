/* eslint-disable @typescript-eslint/no-explicit-any */
import { UserViewComponent } from './user-view.component';
import { FormBuilder } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Inject } from '@angular/core';

describe('UserViewComponent', () =>{
    let fixture: UserViewComponent;
    let formBuilderMock: FormBuilder;
    let dialogRefMock: any;
    let matdialogueMock: any;

    beforeEach(() => {
        formBuilderMock = new FormBuilder();
        dialogRefMock = MatDialogRef;
        matdialogueMock = Inject(MAT_DIALOG_DATA);

        fixture = new UserViewComponent(
            formBuilderMock,
            dialogRefMock,
            matdialogueMock
        );
        fixture.ngOnInit();
    })

    describe('Test: ngonInit', () => {
        it('should initialise view form', () => {
            const userviewform = {
                empId: '',
                username: '',
                name: '',
                email: '',
                designation: '',
                phone: ''
            };
            expect(fixture.userviewForm.value).toEqual(userviewform);
        })
    })
})