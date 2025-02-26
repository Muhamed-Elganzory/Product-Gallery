import { Pipe, PipeTransform } from '@angular/core';
import {Product} from '../../Features/Products/Models/product';

@Pipe({
  name: 'search'
})

export class SearchPipe implements PipeTransform {

  /**
   * Filters the products based on the search term
   * @param product - Array of products to filter
   * @param searchTerm - Term to filter the products by
   * @returns Filtered array of products that match the search term
   */
  transform(product: Product[], searchTerm: string): Product[] {
    return product.filter((product: Product) => {
      return product.title.toLowerCase().includes(searchTerm.toLowerCase());
    });
  }
}
