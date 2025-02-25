import { Pipe, PipeTransform } from '@angular/core';
import {Product} from '../../Features/Products/Models/product';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(product: Product[], searchTerm: string): Product[] {
    return product.filter((product: Product) => {
      return product.title.toLowerCase().includes(searchTerm.toLowerCase());
    });
  }
}
