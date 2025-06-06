export interface Policy {
    id: number;
    name: string;
    policyType: string;
    description: string;
    premium: number;
    coverageAmount: number;
    customerId: number;
    agentId: number;
    // type: string; // child, life, health, home, etc.
  }
  