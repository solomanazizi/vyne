import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class BasicAuthenticationInterceptor implements HttpInterceptor {
  httpOptions = {
    headers: new HttpHeaders({
      'Authorization': 'Basic ' + btoa('user:userPass')
    })
  };

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const authenticatedReq = request.clone({
      headers: request.headers.set('Authorization', 'Basic ' + btoa('user:userPass'))
    });

    return next.handle(authenticatedReq).pipe(catchError(err => {
      return throwError(err.error);
    }));
  }
}
