import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { ProductsScreenComponent } from './screens/products-screen/products-screen.component';
import { CartScreenComponent } from './screens/cart-screen/cart-screen.component';


const routes : Routes = [
  {
    path : '', 
    component : ProductsScreenComponent
  },
  {
    path : 'cart',
    component : CartScreenComponent
  }
]


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    ProductsScreenComponent,
    CartScreenComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
