import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'; // ✅ Get ID from URL
import { CustomerService } from '../../customer.service';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../../header/header.component';

@Component({
  selector: 'app-updatecustomer',
  imports: [FormsModule, HeaderComponent, CommonModule],
  templateUrl: './updatecustomer.component.html',
  styleUrls: ['./updatecustomer.component.css']
})
export class UpdateCustomerComponent implements OnInit {
  customerId: number | null = null;
  customer: any = {};
  isSubmitting: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private customerService: CustomerService
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.customerId = params['customerId']; // ✅ Get ID from query params
      if (this.customerId) {
        this.fetchCustomerDetails(this.customerId);
      } else {
        alert('Customer ID not provided!');
        this.router.navigate(['/customers']);
      }
    });
  }

  fetchCustomerDetails(id: number): void {
    this.customerService.getCustomerById(id).subscribe({
      next: (response) => {
        this.customer = response;
      },
      error: () => {
        alert("Customer not found!");
        this.router.navigate(['/customers']);
      }
    });
  }

  updateCustomer(form: NgForm): void {
    if (form.invalid) { // ✅ Ensure form is valid before submitting
      alert("Please fill all fields correctly!");
      return;
    }
  
    this.isSubmitting = true;
    const updatedData = this.customer; // ✅ Send updated customer data
  
    this.customerService.updateCustomer(this.customerId, updatedData).subscribe({
      next: () => {
        alert("Customer updated successfully!");
        this.isSubmitting = false;
        this.router.navigate(['/customers']); // ✅ Redirect back to Customer Dashboard
      },
      error: () => {
        alert("Update failed!");
        this.isSubmitting = false;
      }
    });
  }
  
  }
  

