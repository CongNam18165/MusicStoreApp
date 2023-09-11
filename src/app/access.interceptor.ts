import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpClient
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AccessInterceptor implements HttpInterceptor {

  constructor() { }

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler): Observable<HttpEvent<any>> {
    if (localStorage.getItem('accessToken') !== null) {
      const token = localStorage.getItem('accessToken')
      const tokenType = localStorage.getItem('tokenType')
      const authRequest = request.clone({
        setHeaders: {
          Authorization: `${tokenType} ${token}`
        },
      })
      return next.handle(authRequest);
    }
    else {
      return next.handle(request);
    }
    // return next.handle(request);
  }
}
