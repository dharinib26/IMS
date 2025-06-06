import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink, RouterModule } from '@angular/router'; 
import { HeaderComponent } from '../header/header.component';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { ListAgentsComponent } from './listagents/listagents.component';
import { AgentService } from '../agent.service';

@Component({
  selector: 'app-agent',
  imports: [FormsModule, HeaderComponent, RouterLink, RouterModule, CommonModule,SidebarComponent,ListAgentsComponent], 
  templateUrl: './agent.component.html',
  styleUrl: './agent.component.css'
})
export class AgentComponent {
  agents: any[] = [];
  filteredAgents: any[] = []; // Define filteredAgents
  searchText: string = '';
  constructor(private agentService: AgentService, private router: Router) {}

  ngOnInit(): void {
    this.getAllAgents();
  }

  getAllAgents(): void {
    this.agentService.getAllAgents().subscribe(response => {
      this.agents = response;
      // Initially, display all agents:
      this.filteredAgents = response;
    });
  }
  searchAgent(): void {
    if (!this.searchText) {
      this.filteredAgents = this.agents;
    } else {
      this.filteredAgents = this.agents.filter(agent =>
        agent.name.toLowerCase().includes(this.searchText.toLowerCase())
      );
    }
  }
  confirmDelete(agentId: number): void {
    const isConfirmed = confirm("Are you sure you want to delete this agent?");
    if (isConfirmed) {
      this.agentService.deleteAgent(agentId).subscribe({
        next: () => {
          alert("Agent deleted successfully!");
          // Refresh the listing after deletion
          this.getAllAgents();
        },
        error: (err) => {
          console.error("Deletion failed:", err);
          alert("Failed to delete agent. Please try again.");
        }
      });
    }
  }
}
