import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ListProductComponent} from '../../src/app/product/list-product/list-product.component';
import { AddProductComponent } from './product/add-product/add-product.component';
import { PlaceOrderComponent } from './order/place-order/place-order.component';
import { ListOrderComponent } from './order/list-order/list-order.component';


const routes: Routes = [  
  { path: '', redirectTo: 'view-products', pathMatch: 'full' },  
  { path: 'view-products', component: ListProductComponent },  
  { path: 'add-product', component: AddProductComponent }, 
  { path: 'place-order', component: PlaceOrderComponent},
  { path: 'list-order', component: ListOrderComponent} 

];  

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
