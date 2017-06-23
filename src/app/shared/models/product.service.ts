import { BehaviorSubject } from 'rxjs/Rx';
import { Http, RequestMethod, Response, RequestOptionsArgs } from '@angular/http';
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs/Observable'
import 'rxjs/add/operator/map'
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
@Injectable()
export class ProductService {

  static BASE_URL = 'http://localhost:3000/products'

  // It's our readonly observable to be aware of changes on our product collection
  readonly products$: Observable<Array<IProduct>>
  // It's our BehaviorSubject, which will emit new version of our collection
  private _products$: BehaviorSubject<Array<IProduct>>
  // It's our dataStore: our in-memory products collection
  private dataStore: IProductServiceStore

  constructor(private _httpService: Http) {                             // Inject Http service to make HTTP Request
    this._products$ = new BehaviorSubject([])                           // Instanciate our BehaviorSubject w/ an empty collection 
    this.products$ = this._products$.asObservable()                     // Store in our readonly variable our observable
    this.dataStore = {                                                  // Init empty dataStore
      products: []
    }
  }

  /**
   * Make a get request to retrieve all products
   * 
   * @return an observable of Iproduct[] form the HTTP request
   */
  getAll(): Observable<Array<IProduct>> {
    const url = `${ProductService.BASE_URL}`
    return this._request(RequestMethod.Get, url)
  }

  /**
   * Make a get request to retrieve the given id product
   * 
   * @param id The product id
   * @return an observable of Iproduct form the HTTP request
   */
  getOne(id: number): Observable<IProduct> {
    if (isNaN(Number(id)) || id < 0) {                                  // Check if its a valid id
      throw new Error('Given number must be valid and greater than 0')
    }
    const url = `${ProductService.BASE_URL}/${id}`
    return this._request(RequestMethod.Get, url)
  }

  /**
   * Make a put request to save data on server for the product payload
   *
   * @param product The product object (payload IProduct)
   * @return an observable of Iproduct form the HTTP request
   */
  put(product: IProduct): Observable<IProduct> {
    const url = `${ProductService.BASE_URL}/${product.id}`
    return this._request(RequestMethod.Put, url, product)
  }

  /**
   * Make a post request to create data on server for the product payload
   * 
   * @param product The product object (payload IProduct)
   * @return an observable of Iproduct form the HTTP request
   */
  post(product: IProduct): Observable<IProduct> {
    const url = `${ProductService.BASE_URL}`
    return this._request(RequestMethod.Post, `${ProductService.BASE_URL}`, product)
  }

  /**
   * Generic method to make request
   * 
   * @param method The request method: POST, GET, PUT
   * @param url The request url
   * @param payload The payload (for put/post)
   */
  private _request<T>(method: RequestMethod, url: string, payload?: IProduct): Observable<T> {
    const requestOption: RequestOptionsArgs = {             // We build the request options: method, payload
      method: method,
      body: payload ? payload : null
    }
    return this._httpService.request(url, requestOption)    // Call the Http service get method with the given URL
      .map(res => res.json())                               // Transform Http Response into a JSON Object
      .do(product => this._syncDataStore(product))          // Sync server response with dataStore
  }

  /**
   * Sync given data with our dataStore in-memory collection
   * - Add the product if not found
   * - Update it else
   * 
   * @param products The data to sync our dataStore (can be array or flat product)
   */
  private _syncDataStore(products: Array<IProduct> | IProduct) {
    // Force products to be an array
    if (!Array.isArray(products)) {
      products = [products];
    }
    // For each products, we'll check if it exists into the dataStore
    // --> if yes, we update the value
    // --> if no, we add the value
    products.forEach(product => {
      const productId = product.id
      const currentIndex = this.dataStore.products.findIndex(storeProduct => storeProduct.id === productId)
      if (currentIndex < 0) { // When not found product into dataStore
        this.dataStore.products.push(product)
      } else {
        this.dataStore.products[currentIndex] = product
      }
    });
    this._emitDataStore();
  }

  /**
   * Emit a new event on the BehaviorSubject based on our dataStore value
   */
  private _emitDataStore() {
    this._products$.next(Object.assign({}, this.dataStore).products);
  }

}

export interface IProductServiceStore {
  products: Array<IProduct>;
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