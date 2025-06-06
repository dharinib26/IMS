import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { CustomerService } from '../../customer.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { HeaderComponent } from '../../header/header.component';

@Component({
  selector: 'app-deletecustomer',
  imports: [FormsModule,HeaderComponent,RouterLink,CommonModule],
  templateUrl: './deletecustomer.component.html',
  styleUrl: './deletecustomer.component.css'
})
export class DeleteCustomerComponent {
  constructor(private customerService: CustomerService) {}

  deleteCustomer(form: NgForm): void {
    const customerId = form.value.customerId;
    this.customerService.deleteCustomer(customerId).subscribe(() => {
      alert("Customer deleted successfully!");
    });
  }
}
