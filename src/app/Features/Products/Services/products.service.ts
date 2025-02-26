import {inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {testingEnvironment} from '../../../Environments/testing';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private readonly httpClient: HttpClient = inject(HttpClient);

  /**
   * Function to call API and fetch all products
   * @returns Observable containing the list of products
   */
  getProducts(): Observable <any> {
    return this.httpClient.get(testingEnvironment.baseUrl + 'products');
  }

  /**
   * Function to call API and fetch details of a specific product by ID
   * @param productID - ID of the product to fetch details
   * @returns Observable containing the product details
   */
  getProductDetails(productID: number): Observable <any> {
    return this.httpClient.get(testingEnvironment.baseUrl + 'products/' + productID);
  }
}
