import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { Router, RouterLink } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { FormsModule, NgForm } from '@angular/forms';
import { LoginService } from '../login.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-register',
  imports: [HeaderComponent, RouterLink, LoginComponent, FormsModule,CommonModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  name: string = '';
  email: string = '';
  roles: string = '';
  password: string = '';

  constructor(private router: Router, private loginService: LoginService) {}

  validateR(form: NgForm) {
    console.log("Register Form Data:", form.value); // Debugging log

    this.loginService.register(form.value).subscribe(response => {
      console.log("Response from backend:", response);

      // ✅ Store role for role-based access after registration
      localStorage.setItem("userRole", form.value.roles);

      this.router.navigate(['/login']);
    });
  }
}
