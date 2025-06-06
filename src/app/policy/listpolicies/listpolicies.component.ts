import { Component, OnInit } from '@angular/core';
import { PolicyService } from '../../policy.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { HeaderComponent } from '../../header/header.component';

@Component({
  selector: 'app-listpolicies',
  imports: [FormsModule,HeaderComponent,RouterLink,CommonModule],
  templateUrl: './listpolicies.component.html',
  styleUrl: './listpolicies.component.css'
})
export class ListPoliciesComponent implements OnInit {
  policies: any[] = [];

  constructor(private policyService: PolicyService) {}

  ngOnInit(): void {
    this.getAllPolicies();
  }

  getAllPolicies(): void {
    this.policyService.getAllPolicies().subscribe(response => {
      this.policies = response;
    });
  }
}
