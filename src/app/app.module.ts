import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ProductComponent} from '../../src/app/product/product.component';
import {ListProductComponent} from '../../src/app/product/list-product/list-product.component';
import {ProductServiceService} from '../../src/app/service/product-service.service';
import { OrderService} from '../../src/app/service/order.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { AddProductComponent } from './product/add-product/add-product.component';
import { PlaceOrderComponent } from './order/place-order/place-order.component';
import { ListOrderComponent } from './order/list-order/list-order.component';

@NgModule({  
  declarations: [  
    AppComponent,
    ProductComponent,
    ListProductComponent ,
    AddProductComponent,
    PlaceOrderComponent,
    ListOrderComponent    ],  
  imports: [  
    BrowserModule,  
    AppRoutingModule,  
    FormsModule,  
    HttpClientModule,
    ReactiveFormsModule
  ],  
  providers: [ProductServiceService,OrderService],  
  bootstrap: [AppComponent]  
})  
export class AppModule { }  

