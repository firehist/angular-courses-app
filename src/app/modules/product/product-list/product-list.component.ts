import { IProduct, ProductService } from './../../../shared/models/product.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/filter';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  pageTitle: string = 'Product List';
  showImage: boolean = true;
  textFilter: string = '';
  products: Observable<IProduct[]>;

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.products = this.productService.getAll()
      .map(products => {
        const emptyTextFilter = this.textFilter === '';
        return emptyTextFilter ?
          products :
          products.filter(product => product.productName.toLowerCase().includes(this.textFilter.toLowerCase()));
      });
  }

  toggleImage() {
      this.showImage = !this.showImage;
  }

  updateRating(product: IProduct, rating: number) {
    const newProduct = Object.assign({}, product, {starRating: rating})
    this.productService.put(newProduct)
      .subscribe(product => console.log('Save done.'))
  }

}