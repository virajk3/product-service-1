import { Component, OnInit } from '@angular/core';
import { ProductServiceService } from '../../service/product-service.service';
import { Product } from '../../model/product';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent implements OnInit {

  constructor(private productservice: ProductServiceService, private router : Router) {}
  productList: Product[] = [];
  product: Product;
  dataSource: any;

  ngOnInit(): void {
   this.getAllProducts();
  }

  deleteProduct(productId : number) {
    this.productservice.deleteProduct(productId)
      .subscribe(data => {
        this.getAllProducts();
      });
  }
 
 getAllProducts(){
  this.productservice.getAllProduct()
     .subscribe(data => {
        this.productList = data;
        console.log("data:: " + data);
      },
        error => console.log(error));
 }


 updateProduct(productId : number) {
  this.productservice.getProductById(productId)
  .subscribe(data => {
    this.product = data;
    this.productservice.setProduct(this.product );
    console.log("data::"+data);
    this.router.navigate(['add-product']);
  });

 }
}
