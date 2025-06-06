import { Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { PolicyComponent } from './policy/policy.component';
import { CreatePolicyComponent } from './policy/create-policy/create-policy.component';
import { AddclaimComponent } from './claim/addclaim/addclaim.component';
import { GetclaimbyidComponent } from './claim/getclaimbyid/getclaimbyid.component';
import { UpdateclaimComponent } from './claim/updateclaim/updateclaim.component';
import { DeleteclaimComponent } from './claim/deleteclaim/deleteclaim.component';
import { CreateCustomerComponent } from './customer/createcustomer/createcustomer.component';
import { GetCustomerComponent } from './customer/getcustomer/getcustomer.component';
import { UpdateCustomerComponent } from './customer/updatecustomer/updatecustomer.component';
import { DeleteCustomerComponent } from './customer/deletecustomer/deletecustomer.component';
import { CreateAgentComponent } from './agent/createagent/createagent.component';
import { GetAgentComponent } from './agent/getagent/getagent.component';
import { UpdateAgentComponent } from './agent/updateagent/updateagent.component';
import { DeleteAgentComponent } from './agent/deleteagent/deleteagent.component';
import { ListAgentsComponent } from './agent/listagents/listagents.component';
import { GetPolicyComponent } from './policy/getbypolicyid/getbypolicyid.component';
import { UpdatepolicyComponent } from './policy/updatepolicy/updatepolicy.component';
import { DeletePolicyComponent } from './policy/deletepolicy/deletepolicy.component';
import { ListPoliciesComponent } from './policy/listpolicies/listpolicies.component';
import { GetPolicyByCustomerComponent } from './policy/getpolicybycustomer/getpolicybycustomer.component';
import { GetAllCustomersComponent } from './customer/getallcustomers/getallcustomers.component';
import { GetAllClaimsComponent } from './claim/getallclaims/getallclaims.component';
import { CustomerComponent } from './customer/customer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { AgentComponent } from './agent/agent.component';
import { ApplyPolicyComponent } from './policy/apply-policy/apply-policy.component';

export const routes: Routes = [
    { path: "", component: WelcomeComponent },
    { path: "login", component: LoginComponent },
    { path: "register", component: RegisterComponent },
    { path: "home", component: HomeComponent },
    { path: "policy", component: PolicyComponent },
    { path: "create-policy", component: CreatePolicyComponent }, // ✅ Added Create Policy route
    { path: "addclaim", component: AddclaimComponent },
    { path: "getclaimbyid", component: GetclaimbyidComponent },
    { path: "updateclaim", component: UpdateclaimComponent },
    { path: "deleteclaim", component: DeleteclaimComponent },
    { path: "list-claims", component: GetAllClaimsComponent },
    { path: "customers", component: CustomerComponent },
    { path: "createcustomer", component: CreateCustomerComponent },
    { path: "getcustomer", component: GetCustomerComponent },
    { path: "updatecustomer", component: UpdateCustomerComponent },
    { path: "deletecustomer", component: DeleteCustomerComponent },
    { path: "get-all-customers", component: GetAllCustomersComponent},
    { path: 'agent', component: AgentComponent },
    { path: "create-agent", component: CreateAgentComponent },
    { path: "get-agent", component: GetAgentComponent },
    { path: "update-agent", component: UpdateAgentComponent },
    { path: "delete-agent", component: DeleteAgentComponent },
    { path: "list-agents", component: ListAgentsComponent },
    { path: "get-policy", component: GetPolicyComponent },
    { path: "update-policy", component: UpdatepolicyComponent},
    { path: "delete-policy", component: DeletePolicyComponent },
    { path: "list-policies", component: ListPoliciesComponent },
    { path: "get-policy-by-customer", component: GetPolicyByCustomerComponent },
    { path: 'sidebar', component: SidebarComponent },
    { path: 'apply-policy/:policyId', component: ApplyPolicyComponent }
      
];
