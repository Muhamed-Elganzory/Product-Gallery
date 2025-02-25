import { Routes } from '@angular/router';
import {ProductListComponent} from './Features/Products/Components/product-list/product-list.component';
import {ProductDetailsComponent} from './Features/Products/Components/product-details/product-details.component';

export const routes: Routes = [
  { path: '', redirectTo: 'product', pathMatch: 'full' },
  { path: 'product', component: ProductListComponent, title: 'Products' },
  { path: 'product-details/:id', component: ProductDetailsComponent, title: 'Product Detail' },
];
