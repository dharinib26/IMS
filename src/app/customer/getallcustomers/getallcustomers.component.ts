import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../../customer.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { HeaderComponent } from '../../header/header.component';

@Component({
  selector: 'app-getallcustomers',
  imports: [FormsModule,HeaderComponent,RouterLink,CommonModule],
  templateUrl: './getallcustomers.component.html',
  styleUrl: './getallcustomers.component.css'
})
export class GetAllCustomersComponent implements OnInit {
  customers: any[] = [];

  constructor(private customerService: CustomerService) {}

  ngOnInit(): void {
    this.getAllCustomers();
  }

  getAllCustomers(): void {
    this.customerService.getAllCustomers().subscribe(response => {
      this.customers = response;
    });
  }
}
