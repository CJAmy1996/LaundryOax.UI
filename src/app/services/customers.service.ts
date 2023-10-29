import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { Customers } from '../models/customers.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomersService {

  apiUrl: string = environment.apiUrl

  constructor(private http: HttpClient) { }

  getAllcustomers(): Observable<Customers[]>{
    return this.http.get<Customers[]>(this.apiUrl + 'api/LaundryOax/orders')
  }
  deleteAllCustomers(): Observable<Customers[]>{
    return this.http.delete<Customers[]>(this.apiUrl + "api/LaundryOax/{id}")
  }
  
}
