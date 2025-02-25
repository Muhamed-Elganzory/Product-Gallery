import {Component, inject, OnInit} from '@angular/core';
import {ProductsService} from '../../Services/products.service';
import {ActivatedRoute} from '@angular/router';
import {Product} from '../../Models/product';

@Component({
  selector: 'app-product-details',
  imports: [],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent implements OnInit {
  private readonly productsService: ProductsService = inject(ProductsService);
  private readonly activatedRoute: ActivatedRoute = inject(ActivatedRoute);

  productID: number = 0;
  product: Product = {} as Product;

  ngOnInit(): void {
    this.getProductID();
    this.getProductDetails(this.productID)
  }

  getProductDetails(productID: number): void {
    this.productsService.getProductDetails(productID).subscribe({
      next: (response: any): any => {
        this.product = response;
      }
    })
  }

  getProductID(): void{
    this.activatedRoute.paramMap.subscribe({
      next: (data: any): void => {
        this.productID = data.get('id');
      }
    })
  }
}
