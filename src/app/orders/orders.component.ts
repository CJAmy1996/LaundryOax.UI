import { Component,  OnInit } from '@angular/core';
import { Orders } from '../models/orders.model';
import { OrdersService } from '../services/orders.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent  implements OnInit {
    orders ={
      servicename: '',
      service: '',
      total: ''
    };
  
    constructor(private orderService: OrdersService){}
    ngOnInit(): void {
      this.orderService.updateOrderData(this.orders)
      .subscribe(
        response => {
          console.log('Order added successfully:', response);
          // Handle the response as needed
        },
        error => {
          console.error('Error adding order:', error);
          // Handle errors
        }
        );
      }
    }