import { IProduct, ProductService } from './../models/product.service';
import { ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';

@Injectable()
export class ProductResolve implements Resolve<IProduct> {

    constructor(private _productService: ProductService, private _router: Router) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IProduct> {
        return this._productService.getProduct(Number(route.paramMap.get('id')));
    }

}
