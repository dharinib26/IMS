import { Component } from '@angular/core';
import { NavigationEnd, Router, RouterLink, RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { PolicyComponent } from './policy/policy.component';
import { CustomerComponent } from './customer/customer.component';
import { ClaimComponent } from './claim/claim.component';
import { AgentComponent } from './agent/agent.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,RouterLink,HeaderComponent,LoginComponent,RegisterComponent,HomeComponent,PolicyComponent, CustomerComponent,ClaimComponent,AgentComponent,SidebarComponent,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'IMS';
  constructor(private router: Router) {
  }
}
