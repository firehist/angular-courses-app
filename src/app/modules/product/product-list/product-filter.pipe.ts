import { Pipe, PipeTransform } from '@angular/core';
import { IProduct } from './product-list.component'

@Pipe({
  name: 'productFilter'
})
export class ProductFilterPipe implements PipeTransform {

  transform(products: IProduct[], filterText: string = ''): IProduct[] {
    return filterText === '' ? products : products.filter(product => {
      return product.productName.toLowerCase().includes(filterText.toLowerCase());
    });
  }

}
