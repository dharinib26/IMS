import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Policy } from './models/policy.model'; // ✅ Use relative path

@Injectable({
  providedIn: 'root'
})
export class PolicyService {
  private apiUrl = 'http://localhost:8082/policies'; // ✅ Replace with your actual backend URL
  private policyS = 'http://localhost:8082/policies/create';
  constructor(private http: HttpClient) {}

  getAllPolicies(): Observable<Policy[]> {
    return this.http.get<Policy[]>(`${this.apiUrl}/all`);
  }

  createPolicy(policy: Policy): Observable<string> {
    return this.http.post(this.policyS,policy,{responseType:'text'}); // ✅ Creates a policy
  }

  getPolicyById(id: number): Observable<Policy> {
    return this.http.get<Policy>(`${this.apiUrl}/${id}`);
  }

  updatePolicy(id: number, policy: Policy): Observable<Policy> {
    return this.http.put<Policy>(`${this.apiUrl}/update/${id}`, policy);
  }

  deletePolicy(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/delete/${id}`);
  }
  getPoliciesByCustomerId(customerId: number): Observable<Policy[]> {
    return this.http.get<Policy[]>(`http://localhost:8082/policies/getPoliciesByCustomerId/${customerId}`);
  }
  getAvailablePolicies(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/available`);
  }
  applyForPolicy(applicationData: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/apply-policy`, applicationData);
  }
  
}
