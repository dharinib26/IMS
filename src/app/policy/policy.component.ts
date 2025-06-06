import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { Router, RouterLink } from '@angular/router';
import { PolicyService } from '../policy.service';
import { Policy } from '../models/policy.model';  // Import the model
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from '../sidebar/sidebar.component';
@Component({
  selector: 'app-policy',
  imports: [HeaderComponent,RouterLink,CommonModule,FormsModule,ReactiveFormsModule,SidebarComponent],
  templateUrl: './policy.component.html',
  styleUrl: './policy.component.css'
})
export class PolicyComponent implements OnInit {
  policies: any[] = []; // Assigned policies
  availablePolicies: any[] = []; // Predefined policy types
  searchText: string = '';
  isLoading: boolean = true;

  constructor(private policyService: PolicyService) {}

  ngOnInit(): void {
    this.getAssignedPolicies(); // Fetch policies already assigned
    this.getAvailablePolicies(); // Fetch predefined policy types
  }

  getAssignedPolicies(): void {
    this.policyService.getAllPolicies().subscribe({
      next: (data) => {
        this.policies = data;
        this.isLoading = false; // ✅ Set loading to false after data fetch
      },
      error: (err) => {
        console.error('Error fetching assigned policies', err);
        this.isLoading = false; // Ensure loading state is turned off
      }
    });
  }
  getAvailablePolicies(): void {
    this.policyService.getAvailablePolicies().subscribe({
      next: (data) => {
        this.availablePolicies = data;
        this.isLoading = false; // ✅ Set loading to false after data fetch
      },
      error: (err) => {
        console.error('Error fetching available policies', err);
        this.isLoading = false;
      }
    });
  }
  // Getter for form controls


  searchPolicy(): void {
    if (!this.searchText) {
      this.getAssignedPolicies();
    } else {
      this.policies = this.policies.filter(policy =>
        policy.name.toLowerCase().includes(this.searchText.toLowerCase())
      );
    }
  }
}