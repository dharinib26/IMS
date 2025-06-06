import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Customer } from './models/customer.model';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  private baseUrl = 'http://localhost:8081/customers';

  constructor(private http: HttpClient) {}

  createCustomer(customer: Customer): Observable<Customer> {
    return this.http.post<Customer>(`${this.baseUrl}/create`, customer);
  }

  getCustomerById(customerId: number): Observable<Customer> {
    return this.http.get<Customer>(`${this.baseUrl}/${customerId}`);
  }

  updateCustomer(customerId: number, customerData: Customer): Observable<Customer> {
    return this.http.put<Customer>(`${this.baseUrl}/update/${customerId}`, customerData);
  }

  deleteCustomer(customerId: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/delete/${customerId}`);
  }

  getAllCustomers(): Observable<Customer[]> {
    return this.http.get<Customer[]>(`http://localhost:8081/customers/all`);
  }
  
}
