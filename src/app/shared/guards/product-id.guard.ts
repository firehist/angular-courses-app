import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ProductIdGuard implements CanActivate {

  constructor(private _router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      const id = Number(next.params.id)
      if (isNaN(id) || id > 0) {
        console.log('Given param id is not valid', next.params.id)
        this._router.navigateByUrl('/products')
        return false;
      }
      return true;
  }
}
