import { Component, OnInit } from '@angular/core';
import { AgentService } from '../../agent.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { HeaderComponent } from '../../header/header.component';
import { DeleteAgentComponent } from '../deleteagent/deleteagent.component';
import { UpdateAgentComponent } from '../updateagent/updateagent.component';

@Component({
  selector: 'app-listagents',
  imports: [FormsModule, HeaderComponent, RouterLink, CommonModule,DeleteAgentComponent,UpdateAgentComponent],
  templateUrl: './listagents.component.html',
  styleUrl: './listagents.component.css'
})
export class ListAgentsComponent implements OnInit {
  agents: any[] = [];
  searchText: string = '';  // ✅ Added search text property
  filteredAgents: any[] = [];  // ✅ Stores filtered agent list

  constructor(private agentService: AgentService) {}

  ngOnInit(): void {
    this.getAllAgents();
  }

  getAllAgents(): void {
    this.agentService.getAllAgents().subscribe(response => {
      this.agents = response;
      this.filteredAgents = response;  // ✅ Initialize filtered agents
    });
  }

  searchAgent(): void {
    const searchLower = this.searchText.toLowerCase();
    this.filteredAgents = this.agents.filter(agent => agent.name.toLowerCase().includes(searchLower));
  }
}
