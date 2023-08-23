import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {

  @Output() outPutValue = new EventEmitter<String>();


  setOutPutValue(value: String) {
    this.outPutValue.emit(value);
  }
}
