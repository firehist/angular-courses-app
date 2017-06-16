import { Pipe, PipeTransform } from '@angular/core';
import { IProduct, IProductCategory, IProductListFilter } from './product-list.component';

@Pipe({
  name: 'productFilter'
})
export class ProductFilterPipe implements PipeTransform {

  transform(products: IProduct[], filterText: string = '', filterCategory: IProductCategory | 'all' = 'all'): IProduct[] {
    const productsFilteredByList = filterText === '' ? products : products.filter(product => {
      return product.productName.toLowerCase().includes(filterText.toLowerCase());
    });
    const productsFilteredByCategory = filterCategory === 'all' ? productsFilteredByList : productsFilteredByList.filter(product => {
      return product.category === filterCategory;
    });
    return productsFilteredByCategory;
  }

}
