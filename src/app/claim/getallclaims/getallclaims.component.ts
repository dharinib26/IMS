import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { HeaderComponent } from '../../header/header.component';
import { ClaimService } from '../../claim.service';

@Component({
  selector: 'app-getallclaims',
  imports: [FormsModule,HeaderComponent,RouterLink,CommonModule],
  templateUrl: './getallclaims.component.html',
  styleUrl: './getallclaims.component.css'
})
export class  GetAllClaimsComponent implements OnInit {
  claims: any[] = [];

  constructor(private claimService: ClaimService) {}

  ngOnInit(): void {
    this.getAllClaims();
  }

  getAllClaims(): void {
    this.claimService.getAllClaims().subscribe(response => {
      this.claims = response;
    });
  }
}
