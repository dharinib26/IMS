import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { LoginService, User } from '../login.service';
import { HeaderComponent } from '../header/header.component';
import { jwtDecode } from 'jwt-decode';

@Component({
  selector: 'login',
  imports: [FormsModule, HeaderComponent, RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  constructor(private router: Router, private loginService: LoginService) {}

  validateL(form: NgForm) {
    console.log("In Validate....");
    var username: string = form.value.username;
    var password: string = form.value.password;
    console.log(username);
    const user = new User(username, password);

    this.loginService.login(user).subscribe(response => {
      console.log("Response from backend", response);
      localStorage.setItem("token", response); // ✅ Store JWT token

      // ✅ Extract user role from JWT and store it
      let token = localStorage.getItem("token");
      if (token) {
        let decodedToken: any = jwtDecode(token);
        localStorage.setItem("userRole", decodedToken.roles); // ✅ Store role
        localStorage.setItem("userId", decodedToken.id); // ✅ Store user ID
        console.log("User Role:", decodedToken.roles);
      }

      alert("Logged in successfully");
      this.router.navigate(['home']).then(() => {
        window.location.reload(); // ✅ Refresh navbar to reflect login state
      });
    });
  }

  loginUser() {
    // Simulating successful login (Replace with actual login logic)
    localStorage.setItem('token', 'userAuthToken'); // Store auth token
    window.location.reload(); // Refresh UI to reflect login state
  }
}
