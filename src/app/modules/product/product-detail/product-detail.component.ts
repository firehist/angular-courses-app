<<<<<<< HEAD
import { IProduct, ProductService } from '../../../shared/models/product.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
<<<<<<< HEAD
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Rx';
=======
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
>>>>>>> Step-10
import 'rxjs/add/operator/take';
import 'rxjs/add/observable/from';
=======
import { IProduct, ProductService } from '../../../shared/models/product.service'
import { forbiddenNameValidator, validProductCode } from '../../../shared/validators/product.validators'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { Component, OnInit } from '@angular/core'
import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router'
import { Observable } from 'rxjs/Observable'
import 'rxjs/add/operator/take'
import 'rxjs/add/operator/last'
import 'rxjs/add/observable/from'
>>>>>>> Step-11

export enum PRODUCT_DETAIL_MODE {
  EDIT,
  VIEW
}

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
<<<<<<< HEAD
export class ProductDetailComponent implements OnInit, OnDestroy {
=======
export class ProductDetailComponent {
>>>>>>> Step-11

  product$: Observable<IProduct>
  productForm: FormGroup
  mode: PRODUCT_DETAIL_MODE

<<<<<<< HEAD
  // Use to store the subscription and unsubscribe into ngOnDestroy method
  private productSubscription: Subscription

=======
>>>>>>> Step-10
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

<<<<<<< HEAD
  ngOnInit() {
    this.initForm()
<<<<<<< HEAD
  }

  ngOnDestroy() {
    // Destroy subscription when component goes away
    this.productSubscription.unsubscribe()
  }

  initForm() {
    // We store the subscription into this.productSubscription
    this.productSubscription = this.product$.subscribe(product => {
      this.productForm.setValue(product)
    })
=======
>>>>>>> Step-10
  }

=======
>>>>>>> Step-11
  getNextProductId(id: number) {
    return id + 1
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

<<<<<<< HEAD
<<<<<<< HEAD
=======
  initForm() {
    this.product$.take(1).subscribe(product => {
      this.productForm.setValue(product)
    })
=======
  initForm(product: IProduct) {
    this.productForm.setValue(product)
>>>>>>> Step-11
  }

>>>>>>> Step-10
  onSubmit() {
    if (this.productForm.valid) {
      this._productService.put(this.productForm.value)
        .subscribe(product => {
<<<<<<< HEAD
<<<<<<< HEAD
          // This line update the current product information when back to view mode
          // But it breaks other pages !
          // Let's move to step-11 to fix that
          //this.product$ = Observable.from([product])
=======
          this.product$ = Observable.from([product])
>>>>>>> Step-10
=======
>>>>>>> Step-11
          this.toggleMode()
        })
    }
  }

}
