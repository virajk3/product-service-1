import { Component,Input,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Order } from 'src/app/model/order';
import { OrderService } from 'src/app/service/order.service';

@Component({
  selector: 'app-list-order',
  templateUrl: './list-order.component.html',
  styleUrls: ['./list-order.component.css']
})
export class ListOrderComponent implements OnInit{

  ngOnInit(): void {
     this.getOrderList();
  }

  constructor(private orderService: OrderService, private router : Router) {}
  orderList: Order[] = [];


  getOrderList(){
    this.orderService.getAllOrders()
     .subscribe(data => {
        this.orderList = data;
        console.log("data:: " + data);
      },
        error => console.log(error));
    }

}
