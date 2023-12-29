import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Orders } from '../models/orders.model';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class OrdersService {
  apiUrl: string = environment.apiUrl
  constructor(private http: HttpClient) { }
 
 
 getAllorders(): Observable<Orders[]>{
    return this.http.get<Orders[]>(this.apiUrl + 'api/LaundryOax/orders')
  }

  deleteOrders(): Observable<Orders[]>{
    return this.http.delete<Orders[]>(this.apiUrl + 'api/LaundryOax/orders')
  }

  
  updateOrderData(data: any) {
    return this.http.post<Orders[]>(this.apiUrl + 'api/LaundryOax/add-orders', data)
  }


  
}
