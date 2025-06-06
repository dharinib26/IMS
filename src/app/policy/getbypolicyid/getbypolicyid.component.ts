import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { PolicyService } from '../../policy.service';
import { RouterLink } from '@angular/router';
import { HeaderComponent } from '../../header/header.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-getbypolicyid',
  imports: [FormsModule,HeaderComponent,RouterLink,CommonModule],
  templateUrl: './getbypolicyid.component.html',
  styleUrl: './getbypolicyid.component.css'
})
export class GetPolicyComponent {
  policy: any;

  constructor(private policyService: PolicyService) {}

  getPolicyById(form: NgForm): void {
    const policyId = form.value.policyId;
    this.policyService.getPolicyById(policyId).subscribe(response => {
      if (response) {
        this.policy = response;
      } else {
        alert("Policy not found!");
      }
    });
  }
}
