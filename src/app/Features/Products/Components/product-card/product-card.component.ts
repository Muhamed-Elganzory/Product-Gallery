import { Component, Input } from '@angular/core';
import {Product} from '../../Models/product';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-product-card',
  imports: [
    RouterLink
  ],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css'
})
export class ProductCardComponent {

  /**
   * Input property to receive a product object from the parent component
   */
  @Input() product!: Product;
}
