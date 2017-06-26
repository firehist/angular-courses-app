import { AuthSignupComponent } from './auth-signup/auth-signup.component';
import { AuthLoginComponent } from './auth-login/auth-login.component';
import { Routes } from '@angular/router';

export const AUTH_ROUTES: Routes = [
    {
        path: 'login',
        component: AuthLoginComponent
    },
    {
        path: 'signup',
        component: AuthSignupComponent
    },
    { path: '**', redirectTo: 'login' }
]