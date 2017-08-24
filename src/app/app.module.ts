import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SellerComponent } from './seller/seller.component';
import {RouterModule, Routes} from "@angular/router";
import {HttpModule} from "@angular/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { GoodsComponent } from './goods/goods.component';
import { RatingsComponent } from './ratings/ratings.component';
import { StarComponent } from './star/star.component';
import {ClassListService} from "./services/class-list.service";
import { ShopCartComponent } from './shop-cart/shop-cart.component';
import { CartControlComponent } from './cart-control/cart-control.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

const routeConfig: Routes = [
  {path: "", redirectTo: "/goods", pathMatch: 'full'},
  {path: "goods", component: GoodsComponent},
  {path: "ratings", component: RatingsComponent},
  {path: "seller", component: SellerComponent},
  { path: '**', pathMatch: 'full', redirectTo: '' }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SellerComponent,
    GoodsComponent,
    RatingsComponent,
    StarComponent,
    ShopCartComponent,
    CartControlComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(routeConfig),
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  providers: [ClassListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
