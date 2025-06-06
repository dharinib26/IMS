import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { ClaimService } from '../../claim.service';
import { RouterLink } from '@angular/router';
import { HeaderComponent } from '../../header/header.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-getclaimbyid',
  imports: [FormsModule,HeaderComponent,RouterLink,CommonModule],
  templateUrl: './getclaimbyid.component.html',
  styleUrl: './getclaimbyid.component.css'
})
export class GetclaimbyidComponent {
  claim: any;

  constructor(private claimService: ClaimService) {}

  getClaimById(form: NgForm): void {
    const claimId = form.value.claimId;
    this.claimService.getClaimById(claimId).subscribe(response => {
      this.claim = response;
    });

  }
}
