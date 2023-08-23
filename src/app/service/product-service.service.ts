import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';  
import { Observable } from 'rxjs';
import { Product } from '../model/product';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {


  //private baseUrl = "http://localhost:8080/product/";
  private baseUrl = "http://localhost:9090/product/";
  

  constructor(private http:HttpClient) { }

  public product: Product | null;

  public getProduct() {
    return this.product;
}

public setProduct(prd: Product | null) {
    this.product = prd;
}

  

  getAllProduct():Observable<any>{
    return this.http.get(`${this.baseUrl}`+'getAllProducts');
  }

  addProduct(product:any):Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Credentials': 'true',
          'Access-Control-Allow-Headers': 'Content-Type',
          'Access-Control-Allow-Methods': 'POST'
      })
  };
    return this.http.post(`${this.baseUrl}`+'addProduct',product, httpOptions);
  }
  updateProduct(product: any):Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Credentials': 'true',
          'Access-Control-Allow-Headers': 'Content-Type',
          'Access-Control-Allow-Methods': 'PUT'
      })
  };
  return this.http.put(`${this.baseUrl}`+'updateProduct',product, httpOptions);
  }

  deleteProduct(productId:any):Observable<any>{
    return this.http.get(`${this.baseUrl}`+'deleteProduct/'+productId);
  }

  getProductById(productId: number):Observable<any>{
    return this.http.get(`${this.baseUrl}`+'getProductById/'+productId);
  }

}
