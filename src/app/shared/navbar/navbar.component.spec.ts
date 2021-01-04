import { NavbarComponent } from './navbar.component';
import { Router } from '@angular/router';

describe('NavbarComponent', () => {
    let fixture: NavbarComponent;
    let routerMock: any
    let authServiceMock: any

    beforeEach(() => {
        routerMock = {
            navigate: jest.fn()
        };
        authServiceMock = {
            login: jest.fn()
        }
        fixture = new NavbarComponent(
            authServiceMock,
            routerMock
        )
    })

    // describe('Test: ngonInit', () => {
    //     it('should get currentuser', () => {
    //         const formData = {
    //             username: 'demo',
    //             password: 'password'
    //         }

    //         const response = {}
	// 		const getuserSpy = jest.spyOn(authServiceMock, 'login').mockReturnValue(response);
	// 		expect(getuserSpy).toHaveBeenCalledWith(formData)
	// 	});
    // })

    describe('Test: logout', () => {
        it('should navigate to login', () => {
            fixture.logout();
            expect(routerMock.navigate).toHaveBeenCalledWith(['/login']);
        })
    })
})