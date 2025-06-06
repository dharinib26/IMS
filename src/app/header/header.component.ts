import { Component } from '@angular/core';
import { LoginComponent } from '../login/login.component';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
declare var bootstrap: any; // ✅ Declare Bootstrap for JS usage

@Component({
  selector: 'app-header',
  imports: [RouterLink,CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  isLoggedIn: boolean = false;
  constructor(private router:Router){}
  ngOnInit(): void {
    this.checkLoginStatus();

    // ✅ Force Bootstrap dropdown initialization
    const dropdownElement = document.getElementById('policyDropdown');
    if (dropdownElement) {
      new bootstrap.Dropdown(dropdownElement);
    }
  }
  checkLoginStatus(): void {
    const token = localStorage.getItem('token');
    this.isLoggedIn = token !== null && token !== ''; // ✅ Ensures login is detected only when a valid token exists
  }
  login(){
    this.router.navigate(["/login"])
  }
  register(){
    this.router.navigate(["/register"])
  }
  home(){
    this.router.navigate(["/home"])
  }
  logout(): void {
    localStorage.removeItem('token'); // Clear token
    this.isLoggedIn = false; // ✅ Set login state to false
    this.router.navigate(['/']).then(() => {
      window.location.reload(); // ✅ Ensure navbar updates immediately
      alert("You have logged out successfully!");
    }); // Redirect to lwelcome
  }
}
