import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ProductIdGuard implements CanActivate {

  constructor(private _router: Router) {}

  // This method following the CanActivate interface!
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      const id = Number(next.params.id) // We retrieve the id and cas it into number
      if (isNaN(id) || id < 0) { // We check if its a valid number or if id < 0
        console.log('Given param id is not valid', next.params.id)
        this._router.navigateByUrl('/products') // Redirect to /products route
        return false; // Block the router here
      }
      return true;
  }
}
