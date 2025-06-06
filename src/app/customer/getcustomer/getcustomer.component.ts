import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { CustomerService } from '../../customer.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { HeaderComponent } from '../../header/header.component';

@Component({
  selector: 'app-getcustomer',
  imports: [FormsModule, HeaderComponent, RouterLink, CommonModule],
  templateUrl: './getcustomer.component.html',
  styleUrls: ['./getcustomer.component.css']
})
export class GetCustomerComponent {
  customer: any;
  isLoading: boolean = false;

  constructor(private customerService: CustomerService) {}

  getCustomerById(form: NgForm): void {
    const customerId = form.value.customerId;
    this.isLoading = true;

    this.customerService.getCustomerById(customerId).subscribe({
      next: (response) => {
        this.customer = response;
        this.isLoading = false;
      },
      error: () => {
        alert("Customer not found!");
        this.isLoading = false;
      }
    });
  }
}
