import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class ProductService {

  constructor(private _httpService: Http) { }

  getProducts(): Observable<Array<IProduct>> {
    return this._httpService.get('http://localhost:3000/products')
        .do((res: Response) => console.log(`GET query to '${res.url}': ${res.status}`))
        .map(res => res.json())
        .catch(this._handleError('Products was not found'));
  }

  // Step-09: 1. Retrieve product from server!
  getProduct(id: number): Observable<IProduct> {
    if (isNaN(Number(id)) || id < 0) {
      throw new Error('Given number must be valid and greater than 0');
    }
    return this._httpService.get(`http://localhost:3000/products/${id}`)
        .do((res: Response) => console.log(`GET query to '${res.url}': ${res.status}`))
        .map(res => res.json())
        .catch(this._handleError('Product was not found'));
  }

  saveProduct(product: IProduct): Observable<IProduct> {
    return this._httpService.put(`http://localhost:3000/products/${product.id}`, product)
        .do((res: Response) => console.log(`GET query to '${res.url}': ${res.status}`))
        .map(res => res.json())
        .catch(this._handleError(`Product #${product.id} was not found`));
  }

  private _handleError(errorMessage: string) {
    return (error: any): Observable<Error> => {
      console.error(errorMessage, error);
      return Observable.throw(new Error(error));
    };
  }

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