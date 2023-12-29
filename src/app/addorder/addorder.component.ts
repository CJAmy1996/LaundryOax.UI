import { Component } from '@angular/core';
import { Orders } from '../models/orders.model';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-addorder',
  templateUrl: './addorder.component.html',
  styleUrls: ['./addorder.component.css']
})
export class AddorderComponent {
  addOrderRequest: Orders = {
    orderid: '',
    servicename: '',
    service:'',
    date:'',
    total: 0 
  }

}
