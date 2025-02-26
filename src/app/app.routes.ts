import { Routes } from '@angular/router';
import {ProductListComponent} from './Features/Products/Components/product-list/product-list.component';

export const routes: Routes = [
  { path: '', redirectTo: 'product', pathMatch: 'full' },
  { path: 'product', component: ProductListComponent, title: 'Products' },
  { path: 'product-details/:id', loadComponent: () => import('./Features/Products/Components/product-details/product-details.component').then(c => c.ProductDetailsComponent), title: 'Product Details' },
  { path: '**', redirectTo: 'product', pathMatch: 'full' },
];
