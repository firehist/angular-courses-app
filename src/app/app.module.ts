import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './modules/layout/header/header.component';

@NgModule({
  // Here declare all components, directives or pipes
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  // Here import external module (@angular/x or others)
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  // Here provide all your service. At the module level it will
  // provide singleton for all our application
  providers: [],
  // Here it's used only in the first module (here we got only one AppModule)
  // to set-up the first component to use
  bootstrap: [AppComponent]
})
export class AppModule { }
