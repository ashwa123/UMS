/* eslint-disable @typescript-eslint/no-explicit-any */
import { UserDetailComponent } from './user-detail.component';
import { FormBuilder } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';

describe('UserDetailComponent', () => {
    let fixture: UserDetailComponent;
    let formBuilderMock: FormBuilder;
    let authServiceMock: any;
    let userServiceMock: any;
    let dialogueMock: any

    beforeEach(() =>{

        authServiceMock = {
            CurrentUser: jest.fn()
        };
        userServiceMock = {
            getallUser: jest.fn(),
            deleteUser: jest.fn(),
            updateUser: jest.fn()
        };

        formBuilderMock = new FormBuilder();
        dialogueMock = MatDialog

        fixture = new UserDetailComponent(
            authServiceMock,
            userServiceMock,
            dialogueMock,
            formBuilderMock
        )
        fixture.ngOnInit();
    });

    describe('Test: ngonInit', () => {

        it('should initialise user form', () => {
            const userform = {
                empId:  '',
                username: '',
                password: '',
                name: '',
                email: '',
                phone: ''
            };            
            expect(fixture.userForm.value).toEqual(userform);
        })

    })

    describe('Test: update form', () => {
        it('should validate the form', () => {
            fixture.userForm.controls.empId.setValue('12345');
            fixture.userForm.controls.username.setValue('demo');
            fixture.userForm.controls.name.setValue('Demo');
            fixture.userForm.controls.email.setValue('demo@gmail.com');
            fixture.userForm.controls.phone.setValue('9876543210');
            expect(fixture.userForm.valid).toBeTruthy();
        })
    })

    describe('Test: delete users', () => {
        it('should delete users', () => {
            const formdata = {
                empId:  '12345',
                username: 'demo',
                password: 'password',
                name: 'Demo',
                email: 'demo@gmail.com',
                phone: '9876543210'
            }

            const response = {}

            const spyupdate = jest.spyOn(userServiceMock, 'deleteUser').mockReturnValue(response);
            expect(userServiceMock.deleteUser(formdata)).toBe(response);
            expect(spyupdate).toHaveBeenCalledWith(formdata)
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
})