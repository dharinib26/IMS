import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { LoginService, User } from '../login.service';
import { HeaderComponent } from '../header/header.component';
import { jwtDecode } from 'jwt-decode'; // ✅ Corrected import

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

    this.loginService.login(user).subscribe((response: { token: string }) => {
      console.log("Raw Response from Backend:", response); // ✅ Debugging log
    
      localStorage.setItem("token", response.token); // ✅ Store JWT token
    
      let token = localStorage.getItem("token");
      if (token) {
        let decodedToken: any = jwtDecode(token);
        console.log("Decoded Token:", decodedToken); // ✅ Debugging log
    
        if (decodedToken.roles) {
          localStorage.setItem("userRole", decodedToken.roles); // ✅ Store role
        } else {
          console.error("Role not found in token!");
        }
    
        localStorage.setItem("userId", decodedToken.id); // ✅ Store user ID
        console.log("User Role:", localStorage.getItem("userRole"));
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
