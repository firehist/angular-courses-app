import { PRODUCT_ROUTES } from './modules/product/product.routes';
import { ProductComponent } from './modules/product/product.component';
import { WelcomeComponent } from './modules/welcome/welcome.component';
import { Routes } from '@angular/router';

export const APP_ROUTES: Routes = [
    { path: 'welcome', component: WelcomeComponent },
    { path: 'products', component: ProductComponent, children: PRODUCT_ROUTES },
    { path: '', redirectTo: '/welcome', pathMatch: 'full' },
    { path: '**', redirectTo: '/welcome' }
]