import { ProductIdGuard } from './../../shared/guards/product-id.guard';
import { ProductResolve } from './../../shared/resolves/product.resolve';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductListComponent } from './product-list/product-list.component';
import { Routes } from '@angular/router';

export const PRODUCT_ROUTES: Routes = [
    { path: ':id', component: ProductDetailComponent, resolve: {
        product: ProductResolve
    }, canActivate: [ProductIdGuard] },
    { path: '', component: ProductListComponent },
    { path: '**', redirectTo: '' }
]