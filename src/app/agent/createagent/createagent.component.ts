import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { AgentService } from '../../agent.service';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { HeaderComponent } from '../../header/header.component';

@Component({
  selector: 'app-createagent',
  imports: [FormsModule,HeaderComponent,RouterLink,CommonModule],
  templateUrl: './createagent.component.html',
  styleUrl: './createagent.component.css'
})
export class CreateAgentComponent {
  constructor(private agentService: AgentService,private router: Router) {}

  createAgent(form: NgForm): void {
    if (form.invalid) {
      alert("Please fill all required fields correctly!");
      return;
    }
  
    this.agentService.createAgent(form.value).subscribe({
      next: () => {
        alert("Agent created successfully!");
        this.router.navigate(['/agent']); // ✅ Redirects to Agent Dashboard
      },
      error: (err) => {
        console.error("Creation failed:", err);
        alert("Agent creation failed. Please try again.");
      }
    });
  }
}
