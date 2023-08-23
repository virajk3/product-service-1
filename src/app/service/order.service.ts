import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderService {


  private baseUrl = "http://localhost:8082/order/";

  constructor(private http:HttpClient) { }

  getAllOrders():Observable<any>{
    return this.http.get(`${this.baseUrl}`+'getAllOrders');
  }

  placeOrder(order:any):Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Credentials': 'true',
          'Access-Control-Allow-Headers': 'Content-Type',
          'Access-Control-Allow-Methods': 'POST'
      })
  };
    return this.http.post(`${this.baseUrl}`+'placeOrder',order, httpOptions);
  }


}
