import { AuthGuard } from './shared/guard/auth.guard';
import { AuthComponent } from './modules/auth/auth.component';
import { AUTH_ROUTES } from './modules/auth/auth.routes';
import { PRODUCT_ROUTES } from './modules/product/product.routes';
import { ProductComponent } from './modules/product/product.component';
import { WelcomeComponent } from './modules/welcome/welcome.component';
import { Routes } from '@angular/router';

export const APP_ROUTES: Routes = [
    { path: 'welcome', component: WelcomeComponent },
    {
        path: 'products',
        component: ProductComponent,
        children: PRODUCT_ROUTES,
        canActivate: [AuthGuard]
    },
    { path: '', redirectTo: '/welcome', pathMatch: 'full' },
    { path: '', component: AuthComponent, children: AUTH_ROUTES},
    { path: '**', redirectTo: '/welcome' }
]
