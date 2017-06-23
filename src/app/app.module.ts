import { ProductsResolve } from './shared/resolves/products.resolve';
import { ProductResolve } from './shared/resolves/product.resolve';
import { APP_ROUTES } from './app.routes';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// step-10: 1.
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
    ErrorsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(APP_ROUTES),
    HttpModule,
    ReactiveFormsModule
<<<<<<< HEAD
  ],
  providers: [
    ProductService,
    ProductResolve,
    ProductIdGuard,
    ProductsResolve
=======
>>>>>>> Step-10
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
