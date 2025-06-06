import { Component, OnInit} from '@angular/core';
import { LoginComponent } from '../login/login.component';
import { RouterLink } from '@angular/router';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'welcome',
  imports: [RouterLink,HeaderComponent],
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.css'
})
export class WelcomeComponent implements OnInit {

  ngOnInit(): void {
    localStorage.removeItem('token'); // ✅ Clears login state on welcome page load
  }
}
