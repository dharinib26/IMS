import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { HeaderComponent } from '../../header/header.component';
import { PolicyService } from '../../policy.service';

@Component({
  selector: 'app-deletepolicy',
  imports: [FormsModule,HeaderComponent,RouterLink,CommonModule],
  templateUrl: './deletepolicy.component.html',
  styleUrl: './deletepolicy.component.css'
})
export class DeletePolicyComponent {
  constructor(private policyService: PolicyService) {}

  deletePolicy(form: NgForm): void {
    const policyId = form.value.policyId;
    this.policyService.deletePolicy(policyId).subscribe(() => {
      alert("Policy deleted successfully!");
    });
  }
}
