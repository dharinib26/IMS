import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { PolicyService } from '../../policy.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { HeaderComponent } from '../../header/header.component';

@Component({
  selector: 'app-getpolicybycustomer',
  imports: [FormsModule,HeaderComponent,RouterLink,CommonModule],
  templateUrl: './getpolicybycustomer.component.html',
  styleUrl: './getpolicybycustomer.component.css'
})
export class GetPolicyByCustomerComponent {
  policies: any[] = [];
  customerId: number | null = null;

  constructor(private policyService: PolicyService) {}

  searched: boolean = false; // Track if search is performed

  getPoliciesByCustomer(form: NgForm): void {
    this.customerId = form.value.customerId;
    this.searched = true; // ✅ Set true AFTER submitting search

    this.policyService.getPoliciesByCustomerId(this.customerId).subscribe(response => {
      if (response.length > 0) {
        this.policies = response;
      } else {
        alert("No policies found for this customer!");
        this.policies = [];
      }
    });
  }

}