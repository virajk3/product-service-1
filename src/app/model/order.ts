import {ProductDetails} from '../model/product-details';
import {PaymentDetails} from '../model/payment-details';


export class Order {

    orderId:number;
    productName: String;
    quantity: number;
    orderStatus:string;
    orderDate:string;
    amount:number;
    productDetails: ProductDetails;
    paymentDetails: PaymentDetails;


}
