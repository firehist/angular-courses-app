import { IProduct, ProductService } from '../../../shared/models/product.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/take';
import 'rxjs/add/observable/from';

export enum PRODUCT_DETAIL_MODE {
  EDIT,
  VIEW
}

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  product$: Observable<IProduct>;
  productForm: FormGroup
  mode: PRODUCT_DETAIL_MODE = PRODUCT_DETAIL_MODE.VIEW

  constructor(
    private _route: ActivatedRoute,
    private _productService: ProductService,
    formBuilder: FormBuilder
  ) {
    // Here we retrieve from the data property of the route (resolve) the product
    this.product$ = this._route.data.map(data => data.product);
    // Init the form with formBuilder
    this.productForm = formBuilder.group({
      'id': '',
      'productName': ['', Validators.minLength(6)],
      'productCode': ['', Validators.minLength(6)],
      'releaseDate': '',
      'price': '',
      'description': '',
      'starRating': ['', Validators.compose([Validators.max(5), Validators.min(0)])],
      'imageUrl': ''
    })
  }

  ngOnInit() {
    this.initForm()
  }

  getNextProductId(id: number) {
    return id + 1;
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

  initForm() {
    this.product$.take(1).subscribe(product => {
      this.productForm.setValue(product)
    })
  }

  onSubmit() {
    if (this.productForm.valid) {
      this._productService.saveProduct(this.productForm.value)
        .subscribe(product => {
          this.product$ = Observable.from([product])
          this.toggleMode()
        })
    }
  }

}
