import { Component, OnInit } from '@angular/core';
import { AgentService } from '../../agent.service';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { HeaderComponent } from '../../header/header.component';

@Component({
  selector: 'app-deleteagent',
  standalone: true, // Remove this if you're not using standalone components
  imports: [HeaderComponent, RouterLink, CommonModule],
  templateUrl: './deleteagent.component.html',
  styleUrls: ['./deleteagent.component.css']
})
export class DeleteAgentComponent implements OnInit {
  agentId!: number;

  constructor(
    private agentService: AgentService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    // Retrieve the agentId from the URL query parameters using the snapshot
    const id = this.route.snapshot.queryParamMap.get('agentId');
    if (id) {
      this.agentId = +id;
    } else {
      alert("Invalid Agent ID!");
      this.router.navigate(['/agent']);
    }
  }

  deleteAgent(): void {
    const confirmDelete = confirm("Are you sure you want to delete this agent?");
    if (confirmDelete) {
      this.agentService.deleteAgent(this.agentId).subscribe({
        next: () => {
          alert("Agent deleted successfully!");
          this.router.navigate(['/agent']); // Redirect to Agent Dashboard after deletion
        },
        error: (err) => {
          console.error("Deletion failed:", err);
          alert("Failed to delete agent. Please try again.");
        }
      });
    }
  }
}
