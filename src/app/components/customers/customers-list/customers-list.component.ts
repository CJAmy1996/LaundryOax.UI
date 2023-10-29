import { Component, OnInit } from '@angular/core';
import { Customers } from 'src/app/models/customers.model';
import { CustomersService } from 'src/app/services/customers.service';


@Component({
  selector: 'app-customers-list',
  templateUrl: './customers-list.component.html',
  styleUrls: ['./customers-list.component.css']
})
export class CustomersListComponent implements OnInit {
  customers: Customers[]=[];

  constructor(private customerService: CustomersService){}
  ngOnInit(): void {
    this.customerService.getAllcustomers()
    .subscribe({
      next: (customers) => {
      this.customers = customers;
    },
      error: (response) =>{
        console.log(response);
      }
      
    })
  }

  
  }

