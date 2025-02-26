import {Component, HostListener, inject, OnInit, ViewEncapsulation} from '@angular/core';
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
  showBtnTop: boolean = false;

  /**
   * Fetch all products on component initialization
   */
  ngOnInit(): void {
    this.getAllProducts();
  }

  /**
   * Fetches all products from the API and assigns them to productsList
   */
  getAllProducts(): void {
    this.productsService.getProducts().subscribe({
      next: (response: any): void => {
        this.productsList = response;
      }
    })
  }

  /**
   * If the user clicks on the button, scrolls to the top of the page
   */
  goTop(): void{
    scrollTo(0, 0);
  }

  /**
   * Listens to window scroll events and toggles the visibility of the "scroll to top" button
   * and show button if scrolled more than 500px
   * @param - Scroll event
   */
  @HostListener('window:scroll') scrollToTop(){
    let scrollTop = document.documentElement.scrollTop;
    this.showBtnTop = scrollTop > 500;
  }
}
