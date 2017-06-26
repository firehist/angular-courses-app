import { AuthGuard } from './shared/guard/auth.guard';
import { AuthService } from './shared/services/auth.service';
import { AuthComponent } from './modules/auth/auth.component';
import { ProductsResolve } from './shared/resolves/products.resolve';
import { ProductResolve } from './shared/resolves/product.resolve';
import { APP_ROUTES } from './app.routes';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HeaderComponent } from './modules/layout/header/header.component';
import { ProductListComponent } from './modules/product/product-list/product-list.component';
import { ProductFilterPipe } from './modules/product/product-list/product-filter.pipe';
import { ReversePipe } from './shared/pipes/reverse.pipe';
import { ProductService } from './shared/models/product.service';
import { StarRatingComponent } from './shared/components/star-rating/star-rating.component';
import { WelcomeComponent } from './modules/welcome/welcome.component';
import { ProductDetailComponent } from './modules/product/product-detail/product-detail.component';
import { ProductComponent } from './modules/product/product.component';
import { ProductIdGuard } from './shared/guards/product-id.guard';
import { ErrorsComponent } from './shared/components/errors/errors.component';
import { AuthLoginComponent } from './modules/auth/auth-login/auth-login.component';
import { AuthSignupComponent } from './modules/auth/auth-signup/auth-signup.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProductListComponent,
    ReversePipe,
    ProductFilterPipe,
    StarRatingComponent,
    WelcomeComponent,
    ProductDetailComponent,
    ProductComponent,
    ErrorsComponent,
    AuthLoginComponent,
    AuthSignupComponent,
    AuthComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(APP_ROUTES),
    HttpModule,
    ReactiveFormsModule
  ],
  providers: [
    ProductService,
    ProductResolve,
    ProductIdGuard,
    ProductsResolve,
    AuthService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
