import {inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {testingEnvironment} from '../../../Environments/testing';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private readonly httpClient: HttpClient = inject(HttpClient);

  getProducts(): Observable <any> {
    return this.httpClient.get(testingEnvironment.baseUrl + 'products');
  }

  getProductDetails(productID: number): Observable <any> {
    return this.httpClient.get(testingEnvironment.baseUrl + 'products/' + productID);
  }
}
