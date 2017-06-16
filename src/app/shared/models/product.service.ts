import { isNullOrUndefined } from 'util';
import { Subject, BehaviorSubject } from 'rxjs/Rx';
import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/from';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

@Injectable()
export class ProductService {

  static BASE_URL: string = 'http://localhost:3000/products';

  private _products$: BehaviorSubject<IProduct[]>;
  private dataStore: ProductServiceDataStore = {
    products: []
  };

  constructor(private _httpService: Http) {
    this._products$ = new BehaviorSubject<IProduct[]>([]);
  }

  getAll(): Observable<IProduct[]> {
    this._httpService.get(ProductService.BASE_URL)
      .do((res: Response) => console.log(`[GET] '${res.url}' - ${res.status}`))
      .map(res => res.json())
      .take(1)
      .subscribe(
        products => this._storeUpdateAll(products),
        error => console.log(`Error on getAll: `, error)
      );

    return this._products$.asObservable();
  }

  get(id: number = 0): Observable<IProduct> {
    if (isNaN(id) || id <= 0) {
      throw new Error('id must be a number greater than 0');
    }
    this._httpService.get(`${ProductService.BASE_URL}/${id}`)
      .do((res: Response) => console.log(`[GET] '${res.url}' - ${res.status}`))
      .map(res => res.json())
      .take(1)
      .subscribe(
        product => product => this._storeUpdateOne(product),
        error => console.log(`Error on getAll: `, error)
      );

    return this._products$.asObservable()
      .flatMap(products => products)
      .filter(product => product.id === id)
  }

  put(payload: IProduct): Observable<IProduct> {
    this._httpService.put(`${ProductService.BASE_URL}/${payload.id}`, payload)
      .do((res: Response) => console.log(`[PUT] '${res.url}' - ${res.status}`))
      .map(res => res.json())
      .take(1)
      .subscribe(
        product => this._storeUpdateOne(product),
        error => console.log(`Error on getAll: `, error)
      );

    return this._products$.asObservable()
      .flatMap(products => products)
      .filter(product => product.id === payload.id)
  }

  private _storeUpdateAll(products: IProduct[]) {
    this.dataStore.products = products;
    this._next();
  }

  private _storeUpdateOne(product: IProduct) {
    const productId = product.id
    const currentIndex = this.dataStore.products.findIndex(product => product.id === productId)
    if (currentIndex < 0) {
      this.dataStore.products.push(product);
    } else {
      this.dataStore.products[currentIndex] = product;
    }
    this._next();
  }

  private _next() {
    this._products$.next(this.dataStore.products);
  }

}

export interface ProductServiceDataStore {
  products: IProduct[];
}

export interface IProduct {
  id: number;
  productName: string;
  productCode: string;
  releaseDate: string;
  price: number;
  description: string;
  starRating: number;
  imageUrl: string;
}