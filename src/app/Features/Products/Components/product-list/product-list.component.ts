import {Component, inject, OnInit} from '@angular/core';
import {ProductCardComponent} from '../product-card/product-card.component';
import {ProductsService} from '../../Services/products.service';
import {Product} from '../../Models/product';
import {FormsModule} from '@angular/forms';
import {SearchPipe} from '../../../../Shared/Pipes/search.pipe';

@Component({
  selector: 'app-product-list',
  imports: [
    ProductCardComponent,
    FormsModule,
    SearchPipe,
  ],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent implements OnInit {
  private readonly productsService: ProductsService = inject(ProductsService);

  productsList: Product [] = [];
  searchTerm: string = '';

  ngOnInit(): void {
    this.getAllProducts();
  }

  getAllProducts(): void {
    this.productsService.getProducts().subscribe({
      next: (response: any): void => {
        this.productsList = response;
      }
    })
  }
}
