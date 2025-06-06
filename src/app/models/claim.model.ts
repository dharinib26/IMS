export interface Claim{
    claimId? : number;
    policyId: number;
    customerId: number;
    claimAmount: number;
    claimReason: string;
    claimDate: Date;
    claimStatus: string;
}