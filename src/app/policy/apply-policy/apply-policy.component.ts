import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { PolicyService } from '../../policy.service';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../../header/header.component';

@Component({
  selector: 'app-apply-policy',
  imports: [FormsModule,HeaderComponent,RouterLink,FormsModule,ReactiveFormsModule,CommonModule],
  templateUrl: './apply-policy.component.html',
  styleUrls: ['./apply-policy.component.css']
})
export class ApplyPolicyComponent implements OnInit {
  policyId!: number;
  policyDetails: any;
  applyForm!: FormGroup;
  submitted = false;

  constructor(
    private route: ActivatedRoute,
    private policyService: PolicyService,
    private router: Router,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      if (!params['policyId']) {
        console.error("Policy ID is missing in the route!");
        return;
      }
  
    this.policyId = Number(params['policyId']); // ✅ Convert to number

    if (isNaN(this.policyId)) {
      console.error("Invalid Policy ID received:", params['policyId']);
      return;
    }

    this.getPolicyDetails();
  });
  

     // Initialize form with empty fields but better handling for disabled inputs
  this.applyForm = this.fb.group({
    customerName: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    contact: ['', [Validators.required, Validators.pattern('[0-9]{10}')]],
    policyName: [{ value: '', disabled: true }], // ✅ Auto-filled
    policyType: [{ value: '', disabled: true }], // ✅ Auto-filled
    premium: [{ value: '', disabled: true }], // ✅ Auto-filled
    coverageAmount: [{ value: '', disabled: true }] // ✅ Auto-filled
  });
  }

  getPolicyDetails(): void {
    if (!this.policyId) {
      console.error("Cannot fetch policy details. Policy ID is undefined!");
      return;
    }
    this.policyService.getPolicyById(this.policyId).subscribe({
      next: (data) => {
        if (!data) {
          console.error('No policy data found!');
          return;
        }
  
        this.policyDetails = data;
        
        // Debugging: Log the returned data
        console.log('Policy Data:', data);
  
        this.applyForm.patchValue({
          policyName: data.name ?? 'N/A',
          policyType: data.policyType ?? 'N/A',
          premium: data.premium ?? 0,
          coverageAmount: data.coverageAmount ?? 0
        });
      },
      error: (err) => console.error('Error fetching policy details', err)
    });
  } 

  onSubmit(): void {
    this.submitted = true;
    if (this.applyForm.invalid) {
      return;
    }

    this.policyService.applyForPolicy(this.applyForm.value).subscribe({
      next: () => {
        alert('Application submitted successfully!');
        this.router.navigate(['/policy-dashboard']);
      },
      error: (error) => {
        alert('Failed to submit application.');
      }
    });
  }
}
