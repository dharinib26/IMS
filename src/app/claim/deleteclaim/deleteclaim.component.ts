import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { ClaimService } from '../../claim.service';
import { RouterLink } from '@angular/router';
import { HeaderComponent } from '../../header/header.component';

@Component({
  selector: 'app-deleteclaim',
  imports: [FormsModule,HeaderComponent,RouterLink],
  templateUrl: './deleteclaim.component.html',
  styleUrl: './deleteclaim.component.css'
})
export class DeleteclaimComponent {
  router: any;
  constructor(private claimService: ClaimService) {}

  deleteClaim(form: NgForm): void {
    const claimId = form.value.claimId;
    this.claimService.deleteClaim(claimId).subscribe(() => {
      alert("Claim deleted successfully!");
      this.router.navigate(['home'])

    });
  }
}
