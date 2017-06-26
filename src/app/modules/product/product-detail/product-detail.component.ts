import { IProduct, ProductService } from '../../../shared/models/product.service';
import { forbiddenNameValidator, validProductCode } from '../../../shared/validators/product.validators'
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/take'
import 'rxjs/add/operator/last'
import 'rxjs/add/observable/from'

export enum PRODUCT_DETAIL_MODE {
  EDIT,
  VIEW
}

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent {

  product$: Observable<IProduct>
  productForm: FormGroup
  mode: PRODUCT_DETAIL_MODE

  constructor(
    private _route: ActivatedRoute,
    private _productService: ProductService,
    formBuilder: FormBuilder
  ) {
    this.mode = PRODUCT_DETAIL_MODE.VIEW
    /*
     * Here we combine two streams: 
     * - route data (resolve)
     * - productService data
     * And we return the current product id item
     */
    this.product$ = Observable.combineLatest(
        this._route.data.map(data => data.product),
        this._productService.products$,
        (productFromResolve, products) => {
          // Here we got the in-memory collection (products) and the productFromResolve
          // So let's find our latest in-memory version of this product to listen to it changes
          return products.find(product => product.id === productFromResolve.id)
        })
        .do(product => {
          // Init form with fresh data
          this.initForm(product)
        })

    // Init the form with formBuilder
    this.productForm = formBuilder.group({
      'id': '',
      'productName': ['', [Validators.minLength(3), forbiddenNameValidator(/pi/)]],
      'productCode': ['', validProductCode],
      'releaseDate': '',
      'price': '',
      'description': '',
      'starRating': ['', Validators.compose([Validators.max(5), Validators.min(0)])],
      'imageUrl': ''
    })
  }

  getNextProductId(id: number) {
    return id + 1
  }

  getPrevProductId(id: number) {
    return id - 1
  }

  isEdit() {
    return this.mode === PRODUCT_DETAIL_MODE.EDIT
  }

  toggleMode() {
    this.mode = this.isEdit() ? PRODUCT_DETAIL_MODE.VIEW : PRODUCT_DETAIL_MODE.EDIT
  }

  // We listen click on star and set the value into our form
  onRatingClicked(rating) {
    this.productForm.get('starRating').setValue(rating)
  }

  initForm(product: IProduct) {
    this.productForm.setValue(product)
  }

  onSubmit() {
    if (this.productForm.valid) {
      this._productService.put(this.productForm.value)
        .subscribe(product => {
          this.toggleMode()
        })
    }
  }

}
