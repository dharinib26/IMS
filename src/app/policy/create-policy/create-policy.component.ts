import { Component, OnInit } from '@angular/core';
import { PolicyService } from '../../policy.service';
import { CustomerService } from '../../customer.service';
import { Router, RouterLink } from '@angular/router';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HeaderComponent } from '../../header/header.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-create-policy',
  templateUrl: './create-policy.component.html',
  imports: [FormsModule,HeaderComponent,RouterLink,FormsModule,ReactiveFormsModule,CommonModule],
  styleUrls: ['./create-policy.component.css']
})
export class CreatePolicyComponent implements OnInit {
  policyForm!: FormGroup;
  customers: any[] = [];
  availablePolicies: any[] = []; // Store predefined policies
  submitted = false;

  constructor(
    private customerService: CustomerService,
    private policyService: PolicyService,
    private router: Router,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    // Fetch customers
    this.customerService.getAllCustomers().subscribe({
      next: (data) => this.customers = data,
      error: (err) => console.error('Error fetching customers', err)
    });

    // Fetch available policies
    this.policyService.getAvailablePolicies().subscribe({
      next: (data) => this.availablePolicies = data,
      error: (err) => console.error('Error fetching policy types', err)
    });

    // Initialize form
    this.policyForm = this.fb.group({
      customerId: ['', Validators.required],
      name: ['', [Validators.required, Validators.minLength(3)]],
      type: ['', Validators.required],
      premium: ['', [Validators.required]],
      coverageAmount: ['', [Validators.required]],
      duration: ['', [Validators.required]],
      description: ['']
    });
  }

  onPolicyTypeChange(event: any): void {
    const selectedType = event.target.value;
    const policy = this.availablePolicies.find(p => p.name === selectedType);
    if (policy) {
      this.policyForm.patchValue({
        premium: policy.premium,
        coverageAmount: policy.coverageAmount
      });
    }
  }
  get f() {
    return this.policyForm.controls;
  }
  onSubmit(): void {
    this.submitted = true;
    if (this.policyForm.invalid) {
      return;
    }

    this.policyService.createPolicy(this.policyForm.value).subscribe({
      next: () => {
        alert('Policy created successfully!');
        this.router.navigate(['/list-policies']);
      },
      error: (error) => {
        alert('Failed to create policy.');
      }
    });
  }
}
