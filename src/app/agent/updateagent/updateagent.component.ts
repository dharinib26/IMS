import { Component, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { AgentService } from '../../agent.service';
import { CommonModule } from '@angular/common';
import { Router, RouterLink, ActivatedRoute } from '@angular/router';
import { HeaderComponent } from '../../header/header.component';

@Component({
  selector: 'app-updateagent',
  imports: [FormsModule, HeaderComponent, RouterLink, CommonModule],
  templateUrl: './updateagent.component.html',
  styleUrl: './updateagent.component.css'
})
export class UpdateAgentComponent implements OnInit {
  agent: any;

  constructor(private agentService: AgentService, private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      if (params['agentId']) {
        this.fetchAgentDetailsById(params['agentId']);
      }
    });
  }

  fetchAgentDetailsById(agentId: number): void {
    this.agentService.getAgentById(agentId).subscribe(response => {
      if (response) {
        this.agent = response;
      } else {
        alert("Agent not found!");
      }
    });
  }

  updateAgent(form: NgForm): void {
    if (!this.agent || !this.agent.id) {
      alert("Please fetch the agent details first!");
      return;
    }
  
    const updatedData = { ...this.agent, ...form.value };
  
    this.agentService.updateAgent(this.agent.id, updatedData).subscribe({
      next: () => {
        alert("Agent updated successfully!");
        this.router.navigate(['/agent']); // ✅ Redirects to Agent Dashboard
      },
      error: (err) => {
        console.error("Update failed:", err);
        alert("Update failed. Please check required fields.");
      }
    });
  }
  
}
