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

  constructor(
    private authService: AuthService
  ) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    let username = this.authService.currentUser?.username
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
