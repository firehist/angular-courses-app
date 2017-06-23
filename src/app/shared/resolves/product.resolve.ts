import { IProduct, ProductService } from './../models/product.service';
import { ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map'

@Injectable()
export class ProductResolve implements Resolve<IProduct> {

    // Need to inject productService to call our server!
    constructor(private _productService: ProductService) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IProduct> {
        // Simply call our method getProduct with the current id param
        const productId = Number(route.paramMap.get('id'))
        return this._productService.getOne(productId)
    }
}
