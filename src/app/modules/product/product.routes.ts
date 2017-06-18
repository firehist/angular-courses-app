import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductListComponent } from './product-list/product-list.component';
import { Routes } from '@angular/router';

export const PRODUCT_ROUTES: Routes = [
    { path: ':id', component: ProductDetailComponent },
    { path: '', component: ProductListComponent },
    { path: '**', redirectTo: '' }
]