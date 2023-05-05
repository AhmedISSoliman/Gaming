import { Injectable } from '@angular/core';


import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from './../../environments/environment';
@Injectable()
export class Interceptor implements HttpInterceptor {
  constructor() {
    // this.userLogIn = localStorage.getItem('userToken');
    // this.authService.inToken
  }
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (request.url.startsWith(environment.baseUrl)) {
      // set yout headers for all request for token of user
      request = request.clone({
        setHeaders: {
          'X-RapidAPI-Key': '4e214a5fddmsh10a49edff4c2682p14660bjsn52b1db15bd0e',
          'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
        }
      })
    }
    return next.handle(request);
  }
}
