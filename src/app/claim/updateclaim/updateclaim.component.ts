import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { ClaimService } from '../../claim.service';
import { RouterLink } from '@angular/router';
import { HeaderComponent } from '../../header/header.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'updateclaim',
  imports: [FormsModule,HeaderComponent,RouterLink,CommonModule],
  templateUrl: './updateclaim.component.html',
  styleUrl: './updateclaim.component.css'
})
export class UpdateclaimComponent {

  claimId: number=0;
  status: string = '';
  message: string = '';
  constructor(private claimService: ClaimService) {}

  // updateClaimStatus(form: NgForm): void {
  //   const { claimId, claimStatus } = form.value;
  //   this.claimService.updateClaimStatus(claimId, claimStatus).subscribe(response => {
  //     alert("Claim status updated successfully!");
  //   });
  // }
  updateStatus(form: NgForm): void {
    if (form.valid) {
      const payload = {
        status: this.status
      };
 
      this.claimService.updateClaimStatus(this.claimId, payload).subscribe({
        next: () => {
          this.message = `Claim ID ${this.claimId} status updated to '${this.status}'.`;
          form.resetForm();
        },
        error: err => {
          this.message = 'Error updating status. Please check the Claim ID.';
        }
      });
    }
  }
}
