import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { ApiPaths } from 'src/environments/urls';
import { BehaviorSubject, Observable } from 'rxjs';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private currentUserSubject = new BehaviorSubject<any>('');
  currentUserAction$ = this.currentUserSubject.asObservable()

  isLoggedIn = new BehaviorSubject<boolean>(false);

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  login(formValue: FormGroup) {
    return this.http.post<any>(`${environment.accountUrl}${ApiPaths.Login}`, formValue);
  }
  register(formValue: FormGroup) {
    return this.http.post<any>(`${environment.accountUrl}${ApiPaths.Register}`, formValue);
  }
  saveCurrentToken() {
    const token = localStorage.getItem('userToken');
    this.currentUserSubject.next(token);
    this.isLoggedIn.next(true)
  }

  logOut() {
    localStorage.removeItem('userToken');
    this.currentUserSubject.next(null);
    this.isLoggedIn.next(false);
    this.router.navigate(['/login'])
  }

  public getCurrentUser() {
    return this.currentUserSubject.value;
  }
}
