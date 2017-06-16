import { IProduct, ProductService } from './../../../shared/models/product.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  pageTitle: string = 'Product List'
  showImage: boolean = true;
  listFilter: string = '';
  products: IProduct[];

  constructor(private productService: ProductService) { }

  ngOnInit() {
      console.log('Im ngOnInit 😀');
      this.products = this.productService.getProducts()
  }

  toggleImage() {
      this.showImage = !this.showImage;
  }

}