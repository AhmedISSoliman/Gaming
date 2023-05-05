import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { AsyncSubject, Observable } from 'rxjs';
import { AuthService } from './../services/auth.service';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class CurrentuserGuard implements CanActivate {
  constructor(private authService: AuthService,
    private toastrService: ToastrService,
    private router: Router
  ) { }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if (this.authService.getCurrentUser()) {
      this.toastrService.warning('You are already logged in');
      this.router.navigate(['/home']);
      return false;
    } else {
      return true;
    }
  }
  canActivateChild(route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
    return this.canActivate(route, state);
  }

}
