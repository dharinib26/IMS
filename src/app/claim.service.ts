import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Claim } from './models/claim.model';

@Injectable({
  providedIn: 'root'
})
export class ClaimService {
  private claimS = 'http://localhost:8083/claims/save';
  constructor(private http: HttpClient) {

  }
    createClaim(claim: Claim): Observable<string> {
      return this.http.post(this.claimS,claim,{responseType:'text'}); // ✅ Creates a policy
    }
    getClaimById(claimId: number): Observable<Claim> {
      return this.http.get<Claim>(`http://localhost:8083/claims/${claimId}`);
    }
    updateClaimStatus(claimId: number, payload: { status: string }): Observable<any> {
      return this.http.put(`http://localhost:8083/claims/update-status/${claimId}`, payload);
    }
    deleteClaim(claimId: number): Observable<void> {
      return this.http.delete<void>(`http://localhost:8083/claims/${claimId}`);
    }
    getAllClaims(): Observable<Claim[]> {
      return this.http.get<Claim[]>(`http://localhost:8083/claims/getAllClaims`);
}

}
