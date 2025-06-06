import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { HeaderComponent } from '../header/header.component';
import { CustomerService } from '../customer.service';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { SidebarComponent } from '../sidebar/sidebar.component';

@Component({
  selector: 'app-customer',
  imports: [FormsModule,HeaderComponent,RouterLink,CommonModule,SidebarComponent],
  templateUrl: './customer.component.html',
  styleUrl: './customer.component.css'
})
export class CustomerComponent implements OnInit {
  customers: any[] = [];
  filteredCustomers: any[] = [];
  searchText: string = '';

  constructor(private customerService: CustomerService) {}

  ngOnInit(): void {
    this.getAllCustomers();
  }

  getAllCustomers(): void {
    this.customerService.getAllCustomers().subscribe(response => {
      this.customers = response;
      this.filteredCustomers = response; // Initialize filtered customers
    });
  }

  searchCustomer(): void {
    if (this.searchText.trim() === '') {
      this.filteredCustomers = this.customers; // Reset to all if empty
      return;
    }
    this.filteredCustomers = this.customers.filter(customer =>
      customer.name.toLowerCase().includes(this.searchText.toLowerCase()) ||
      customer.email.toLowerCase().includes(this.searchText.toLowerCase())
    );
  }

  editCustomer(id: number): void {
    alert(`Editing customer ID: ${id}`);
  }

  confirmDelete(customerId: number): void {
    console.log("Delete button clicked for customer ID:", customerId);
    const isConfirmed = confirm("Are you sure you want to delete this customer?");
    console.log("User confirmed:", isConfirmed);
    if (isConfirmed) {
      this.customerService.deleteCustomer(customerId).subscribe({
        next: () => {
          alert("Customer deleted successfully!");
          this.getAllCustomers();
        },
        error: (err) => {
          console.error("Error during deletion:", err);
          alert("Failed to delete customer. Please try again.");
        }
      });
    }
  }
  
}
