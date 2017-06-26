import { AuthService } from './../services/auth.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(
    private _authService: AuthService,
    private _router: Router
  ) {}
  
  /**
   * It check if user is currently logged, redirect to /login page if not
   */
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> {
    return this._authService.auth$
      .map(auth => auth.logged)
      .do(logged => {
        if (!logged) {
          this._router.navigateByUrl('/login')
        }
      })
  }
}
