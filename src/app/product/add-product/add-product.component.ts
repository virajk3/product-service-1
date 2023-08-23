import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Product } from 'src/app/model/product';
import { ProductServiceService } from 'src/app/service/product-service.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  product : Product | null = new Product();
  submitted = false;
  
  constructor(private productService : ProductServiceService, private router: Router){}
 
  ngOnInit(): void {
   this.submitted = false;
   if(this.productService.getProduct() != null){
    this.product = this.productService.getProduct(); 
    if(this.product != null){
    this.productform=new FormGroup({
     

      
      productId:new FormControl(this.product.productId),  
      productName:new FormControl(this.product.productName , [Validators.required , Validators.minLength(5) ] ),  
      quantity:new FormControl(this.product.quantity,Validators.required),  
      price:new FormControl(this.product.price,[Validators.required]),    
    });
    }
   }
  }

  productform=new FormGroup({
    productId:new FormControl(),  
    productName:new FormControl('' , [Validators.required , Validators.minLength(5) ] ),  
    quantity:new FormControl(0,Validators.required),  
    price:new FormControl(0,[Validators.required]),    
  });
  // productform=new FormGroup({
  //   productId:new FormControl(),  
  //   productName:new FormControl('' , [Validators.required , Validators.minLength(5) ] ),  
  //   quantity:new FormControl('',Validators.required),  
  //   price:new FormControl('',[Validators.required]),    
  // });  

  onSubmit() {


    let pid = this.productform.get('productId')?.value;
    if(pid != null){
      this.productService.updateProduct(this.productform.value)
      .subscribe(data => {
        this.productService.setProduct(null);
          this.router.navigate(['view-products']);
      });
    } else {
    this.productService.addProduct(this.productform.value)
      .subscribe(data => {
        this.router.navigate(['view-products']);
      });
  }
}
  
  

  // saveProduct(){  
  //   this.product=new Product();
  //   this.product.productName=this.ProductName.value;
  //   this.product.quantity=this.ProductEmail.value;
  //   this.product.price=this.ProductBranch.value;
  //   this.submitted = true;
  //   this.save();
  // }  

  
  // save() {  
  //   this.productService.createProduct(this.product)  
  //     .subscribe(data => console.log(data), error => console.log(error));  
  //   this.product = new Product();  
  // }  
  
  
  // get ProductName(){  
  //   return this.productform.get('product_name');  
  // }  
  
  // get ProductEmail(){  
  //   return this.productform.get('product_email');  
  // }  
  
  // get ProductBranch(){  
  //   return this.productform.get('product_branch');  
  // }  
  
  // addProductForm(){  
  //   this.submitted=false;  
  //   this.productform.reset();  
  // }    
}
