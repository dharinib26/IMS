import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { RouterLink, RouterModule } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from '../sidebar/sidebar.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  imports: [HeaderComponent,RouterLink,LoginComponent,RouterModule,CommonModule,SidebarComponent],
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  isLoggedIn: boolean = false;

  constructor() {
    // Check if user is logged in
    this.isLoggedIn = localStorage.getItem('token') ? true : false;
  }
}
