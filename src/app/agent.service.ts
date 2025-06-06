import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Agent } from './models/agent.model';

@Injectable({
  providedIn: 'root'
})
export class AgentService {
  private baseUrl = 'http://localhost:8084/agents';

  constructor(private http: HttpClient) {}

  createAgent(agent: Agent): Observable<Agent> {
    return this.http.post<Agent>(`${this.baseUrl}/create`, agent);
  }

  getAgentById(agentId: number): Observable<Agent> {
    return this.http.get<Agent>(`${this.baseUrl}/${agentId}`);
  }

  getAllAgents(): Observable<Agent[]> {
    return this.http.get<Agent[]>(`${this.baseUrl}/all`);
  }

  updateAgent(agentId: number, agentData: Agent): Observable<Agent> {
    return this.http.put<Agent>(`${this.baseUrl}/update/${agentId}`, agentData);
  }

  deleteAgent(agentId: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/delete/${agentId}`);
  }
}
