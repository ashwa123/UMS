/* eslint-disable @typescript-eslint/no-explicit-any */
import { AuthService } from './auth.service';

describe('service: authservice', () => {
    let service: AuthService
    let userServiceMock: any

    beforeEach(() => {

        userServiceMock = {
            getallUser: jest.fn()
        };
        service = new AuthService(
            userServiceMock
        )
    });

    describe('Test: isloogedIn', () => {
        it('should return false', () => {
            expect(service.isLoggedIn).toBe(false);
        });
    });

    describe('Test: Login', () => {
        it('should call getallusers', () => {

            const formData = {
				username: 'demo',
				password: 'pass1234'
			};
            const response = {
                empId: '12345',
                username : 'demo',
                password: 'pass1234',
                name: 'Demo',
                email: 'demo@gmail.com',
                phone: '9087654321'
            }

            const data = {
                username: response.username,
                password: response.password
            }

            const spygetallusers = jest.spyOn(userServiceMock, 'getallUser').mockReturnValue(response);
            expect(userServiceMock.getallUser()).toBe(response);
            expect(spygetallusers).toHaveBeenCalledWith();
            expect(data).toEqual(formData);
        })
    })
})