import { Component } from '@angular/core';
import { ClaimService } from '../../claim.service';
import { Router, RouterLink } from '@angular/router';
import { FormsModule, NgForm } from '@angular/forms';
import { HeaderComponent } from '../../header/header.component';

@Component({
  selector: 'app-addclaim',
  imports: [FormsModule,HeaderComponent,RouterLink],
  templateUrl: './addclaim.component.html',
  styleUrl: './addclaim.component.css'
})
export class AddclaimComponent {
  constructor(private claimService: ClaimService, private router: Router) {}
  createClaim(form: NgForm): void {
    this.claimService.createClaim(form.value).subscribe(response=>console.log(response))
    alert("Claim added successfully")
    this.router.navigate(['home'])
  }
}
