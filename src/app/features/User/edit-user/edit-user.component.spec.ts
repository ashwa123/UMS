/* eslint-disable @typescript-eslint/no-explicit-any */
import { EditUserComponent } from './edit-user.component';
import { FormBuilder } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Inject } from '@angular/core';

describe('EditUserComponent', () => {
    let fixture: EditUserComponent;
    let authServiceMock: any;
    let userServiceMock:any;
    let formBuilderMock: FormBuilder;
    let dialogRefMock: any;
    let matdialogueMock: any;

    beforeEach(() => {
        authServiceMock = {
            CurrentUser: jest.fn()
        };
        userServiceMock = {
            updateUser: jest.fn(),
            addUser: jest.fn()
        };
        formBuilderMock = new FormBuilder();
        dialogRefMock = MatDialogRef;
        matdialogueMock = Inject(MAT_DIALOG_DATA)

        fixture = new EditUserComponent(
            formBuilderMock,
            authServiceMock,
            userServiceMock,
            dialogRefMock,
            matdialogueMock
        );
        fixture.ngOnInit();
    })

    describe('Test: ngonInit', () => {
        it('should initialise update form', () => {
            const updateform = {
                empId:  '',
                username: '',
                name: '',
                email: '',
                phone: ''
            };            
            expect(fixture.updateForm.value).toEqual(updateform);
        })
    })

    describe('Test: update form', () => {
        it('should validate the form', () => {
            fixture.updateForm.controls.empId.setValue('12345');
            fixture.updateForm.controls.username.setValue('demo');
            fixture.updateForm.controls.name.setValue('Demo');
            fixture.updateForm.controls.email.setValue('demo@gmail.com');
            fixture.updateForm.controls.phone.setValue('9876543210');
            expect(fixture.updateForm.valid).toBeTruthy();
        })
    })

    describe('Test updateuser', () => {
        it('should update user', () => {
            const id = 11;
            const formData = {
                empId: '12345',
                username: 'demo',
                name: 'Demo',
                email: 'demo@gmail.com',
                phone: '9876543210'
            }

            const response = {}

            const spyupdate = jest.spyOn(userServiceMock, 'updateUser').mockReturnValue(response);
            expect(userServiceMock.updateUser(formData, id)).toBe(response);
            expect(spyupdate).toHaveBeenCalledWith(formData, id)
        });
    });

    describe('Test Adduser', () => {
        it('should add user', () => {
            const formData = {
                empId: '12345',
                username: 'demo',
                name: 'Demo',
                email: 'demo@gmail.com',
                phone: '9876543210'
            }

            const response = {}

            const spyupdate = jest.spyOn(userServiceMock, 'addUser').mockReturnValue(response);
            expect(userServiceMock.addUser(formData)).toBe(response);
            expect(spyupdate).toHaveBeenCalledWith(formData)
        })
    })
});
