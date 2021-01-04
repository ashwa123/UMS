/* eslint-disable @typescript-eslint/no-explicit-any */
import { LoginComponent } from './login.component';
import { FormBuilder } from '@angular/forms'

describe ('LoginComponent', () => {
  let fixture: LoginComponent;
  let authServiceMock: any;
  let FormBuilderMock: FormBuilder;
  let routerMock: any;

  beforeEach(() => {
    authServiceMock = {
      login: jest.fn(),
      getAllUser: jest.fn()
    };
    FormBuilderMock = new FormBuilder();
    routerMock = jest.fn();
    fixture = new LoginComponent(
      FormBuilderMock,
      routerMock,
      authServiceMock
    );
    fixture.ngOnInit();
  });

  describe('Test: ngOninit', () =>{
    it('should initialise loginform', () => {
      const formData = {
        username: '',
        password: ''
      };
      expect(fixture.loginForm.value).toEqual(formData)
    })
  });

  describe('Test: Login Form', () => {
    it('should invalidate the form', () => {
      fixture.loginForm.controls.username.setValue('');
      fixture.loginForm.controls.password.setValue('');
      expect(fixture.loginForm.valid).toBeFalsy();
    });

    it('should validate the form', () => {
      fixture.loginForm.controls.username.setValue('demo');
      fixture.loginForm.controls.password.setValue('p@asword');
      expect(fixture.loginForm.valid).toBeTruthy();
    });
  });

  describe('Test: Form Invalid', () => {
    it('should not call login', () => {
      const formData = {
        username: '',
        password: ''
      };
      fixture.login();
      const spylogin = jest.spyOn(authServiceMock, 'login');
      expect(spylogin).not.toHaveBeenCalledWith(formData);
    });
  });

  describe('Test: Form valid', () => {
    it('should call login', () => {
      const formData = {
        username: 'demo',
        password: 'p@asword'
      };
      const response = true;
      const spylogin = jest.spyOn(authServiceMock, 'login').mockReturnValue(true);
      expect(authServiceMock.login(formData)).toBe(response);
      expect(spylogin).toHaveBeenCalledWith(formData)
    });
  });
});
