import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { AgentService } from '../../agent.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { HeaderComponent } from '../../header/header.component';

@Component({
  selector: 'app-getagent',
  imports: [FormsModule,HeaderComponent,RouterLink,CommonModule],
  templateUrl: './getagent.component.html',
  styleUrl: './getagent.component.css'
})
export class GetAgentComponent {
  agent: any;

  constructor(private agentService: AgentService) {}

  getAgentById(form: NgForm): void {
    const agentId = form.value.agentId;
    this.agentService.getAgentById(agentId).subscribe(response => {
      if (response) {
        this.agent = response;
      } else {
        alert("Agent not found!");
      }
    });
  }
}
