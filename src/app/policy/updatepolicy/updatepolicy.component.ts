import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { PolicyService } from '../../policy.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { HeaderComponent } from '../../header/header.component';

@Component({
  selector: 'app-updatepolicy',
  imports: [FormsModule,HeaderComponent,RouterLink,CommonModule],
  templateUrl: './updatepolicy.component.html',
  styleUrl: './updatepolicy.component.css'
})
export class UpdatepolicyComponent {
  policy: any;

  constructor(private policyService: PolicyService) {}

  fetchPolicyDetails(form: NgForm): void {
    const policyId = form.value.policyId;
    this.policyService.getPolicyById(policyId).subscribe(response => {
      if (response) {
        this.policy = response;
      } else {
        alert("Policy not found!");
      }
    });
}
updatePolicy(form: NgForm): void {
  if (!this.policy || !this.policy.id) {
    alert("Please fetch the policy details first!");
    return;
  }

  const policyId = this.policy.id;
  const updatedData = { ...this.policy, ...form.value }; // ✅ Merge form values with existing policy data

  this.policyService.updatePolicy(policyId, updatedData).subscribe({
    next: () => {
      alert("Policy updated successfully!");
    },
    error: (err) => {
      console.error("Update failed:", err);
      alert("Update failed. Please check required fields.");
    }
  });
}
}
