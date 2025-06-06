import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { CustomerService } from '../../customer.service';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterModule } from '@angular/router';
import { HeaderComponent } from '../../header/header.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-createcustomer',
  imports: [FormsModule, HeaderComponent, RouterLink, CommonModule,RouterModule],
  templateUrl: './createcustomer.component.html',
  styleUrls: ['./createcustomer.component.css']
})
export class CreateCustomerComponent {
  isSubmitting: boolean = false;

  constructor(private customerService: CustomerService,private router: Router) {}

  createCustomer(form: NgForm): void {
    if (!form.valid) {
      alert("Please fill all fields before submitting!");
      return;
    }

    this.isSubmitting = true;

    this.customerService.createCustomer(form.value).subscribe({
      next: () => {
        alert("Customer created successfully!");
        form.reset();
        this.isSubmitting = false;
        this.router.navigate(['/customers']); 
      },
      error: (err) => {
        console.error("Error creating customer:", err);
        alert("Failed to create customer.");
        this.isSubmitting = false;
      }
    });
  }
}
