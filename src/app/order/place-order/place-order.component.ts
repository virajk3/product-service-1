import { Component,OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Product } from 'src/app/model/product';
import { Order} from '../../model/order'
import { OrderService } from 'src/app/service/order.service';
import { ProductServiceService } from 'src/app/service/product-service.service';

@Component({
  selector: 'app-place-order',
  templateUrl: './place-order.component.html',
  styleUrls: ['./place-order.component.css']
})
export class PlaceOrderComponent implements OnInit{

  constructor(private productservice: ProductServiceService,private orderService : OrderService, private router : Router) {}
  productList: Product[] = [];
  dataSource: any;

  ngOnInit(): void {
    this.getAllProducts();
   }


   getAllProducts(){
    this.productservice.getAllProduct()
       .subscribe(data => {
          this.productList = data;
          console.log("data:: " + data);
        },
          error => console.log(error));
   }

   orderform=new FormGroup({  
    productId:new FormControl('' , [Validators.required ] ),  
    quantity:new FormControl(0,Validators.required),  
    paymentMode:new FormControl('',[Validators.required]),
    totalAmount:new FormControl(0,[Validators.required]),  
    price:new FormControl(0,[Validators.required])
  });  

  onSubmit() {
    this.orderService.placeOrder(this.orderform.value)
      .subscribe(data => {
        this.router.navigate(['list-order']);
      });
  }
  updateTotalAmount() {
    this.orderform.get('totalAmount')?.setValue(0);
    if(this.orderform.get("productId")?.valid &&  this.orderform.get("quantity")?.valid){
      let price = this.orderform.get("price")?.value;
      let quantity = this.orderform.get("quantity")?.value;
      if(price != null && quantity != null){
        var totalAmount =  price * quantity;
        this.orderform.get('totalAmount')?.setValue(totalAmount);
      }
    }
  }

  onEditClick(event: any) {
    let price = event.target.selectedOptions[0].dataset.isocode;
    this.orderform.get('price')?.setValue(price);

    this.updateTotalAmount();
    //this.orderform.get('totalAmount')?.setValue(0);
    //console.log(event.target.dataset.isocode);
  }
}
