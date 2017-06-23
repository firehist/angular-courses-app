import { Observable } from 'rxjs/Observable';
import { IProduct, ProductService } from './../models/product.service';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable()
export class ProductsResolve implements Resolve<IProduct[]> {

  constructor(private _productService: ProductService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IProduct[]> {
    return this._productService.getAll()
  }

}
