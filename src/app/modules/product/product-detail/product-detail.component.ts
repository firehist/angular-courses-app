import { IProduct } from '../../../shared/models/product.service';

import { Observable } from 'rxjs/Observable';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  product$: Observable<IProduct>;

  constructor(private _route: ActivatedRoute) {
    // Here we retrieve from the data property of the route (resolve) the product
    this.product$ = this._route.data.map(data => data.product);
  }

  ngOnInit() {
  }

  getNextProductId(id: number) {
    return id + 1;
  }

}
