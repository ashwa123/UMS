import { of } from 'rxjs';
import { UserDetailService } from './user-detail.service';

describe('service: UserDetailService', () => {
    let service: UserDetailService;
    const http = jest.fn();

    beforeEach(() =>{
        service = new UserDetailService(http as any)
    });
});

describe('Test: getallusers', () => {
    it('should return all users', done => {
        const response = {
            data : {}
        }

        const httpMock = {
            get: jest.fn().mockReturnValue(of(response))
        };
        const serviceMock = new UserDetailService(httpMock as any);
        serviceMock.getallUser().subscribe((data) => {
            expect(httpMock.get).toBeDefined();
            expect(httpMock.get).toHaveBeenCalled();
            expect(data).toEqual(response);
            done();
        });
    });
});

describe('Test: deleteusers', () => {
    it('should return all users', done => {

        const userMock = {
            empId: '12345',
            username: 'demo',
            password: 'password',
            name: 'Demo',
            email: 'demo@gmail.com',
            phone: '9876543210',
            id: 1
        };

        const response = {
            data : {}
        }

        const httpMock = {
            delete: jest.fn().mockReturnValue(of(response))
        };
        const serviceMock = new UserDetailService(httpMock as any);
        serviceMock.deleteUser(userMock).subscribe((data) => {
            expect(httpMock.delete).toBeDefined();
            expect(httpMock.delete).toHaveBeenCalled();
            expect(data).toEqual(response);
            done();
        });
    });
});

describe('Test: updateusers', () => {
    it('should return update user', done => {

        const userid = 11;
        const userMock = {
            empId: '12345',
            username: 'demo',
            password: 'password',
            name: 'Demo',
            email: 'demo@gmail.com',
            phone: '9876543210',
            id: 1
        };

        const response = {
            data : {}
        }

        const httpMock = {
            put: jest.fn().mockReturnValue(of(response))
        };
        const serviceMock = new UserDetailService(httpMock as any);
        serviceMock.updateUser(userMock,userid).subscribe((data) => {
            expect(httpMock.put).toBeDefined();
            expect(httpMock.put).toHaveBeenCalled();
            expect(data).toEqual(response);
            done();
        });
    });
});

describe('Test: addusers', () => {
    it('should return add user', done => {

        const userMock = {
            empId: '12345',
            username: 'demo',
            password: 'password',
            name: 'Demo',
            email: 'demo@gmail.com',
            phone: '9876543210',
        };

        const response = {
            data : {}
        }

        const httpMock = {
            post: jest.fn().mockReturnValue(of(response))
        };
        const serviceMock = new UserDetailService(httpMock as any);
        serviceMock.addUser(userMock).subscribe((data) => {
            expect(httpMock.post).toBeDefined();
            expect(httpMock.post).toHaveBeenCalled();
            expect(data).toEqual(response);
            done();
        });
    });
});