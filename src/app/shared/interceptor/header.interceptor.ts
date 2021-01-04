import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/core/Auth/auth.service';

@Injectable()
export class HeaderInterceptor implements HttpInterceptor {

  /**
   * It initialises the http interceptor
   * @param authService 
   */
  constructor(
    private authService: AuthService
  ) {}

  /**
   * Method to pass the username of the logged in user in request header
   * @param request 
   * @param next 
   */
  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const username = this.authService.currentUser?.username
    if (username) {
      request = request.clone({
        setHeaders: {
          Username: username
        }
      })
    } else {
      request = request.clone({
        setHeaders: {
          Username: ''
        }
      })
    }

    return next.handle(request);
  }
}
