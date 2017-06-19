import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

@Injectable()
export class ProductService {

  constructor(private _httpService: Http) { }

  getProducts(): Observable<Array<IProduct>> {
    return this._httpService.get('http://localhost:3000/products')
        .do((res: Response) => console.log(`GET query to '${res.url}': ${res.status}`))
        .map(res => res.json())
        .catch(error => Observable.throw('Catch an error!', error));
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