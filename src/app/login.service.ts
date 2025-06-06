import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  
  pathL = "http://localhost:9090/auth/authenticate";
  pathR = "http://localhost:9090/auth/new";

  constructor(private client: HttpClient) {}

  public login(login: User): Observable<{ token: string }> {
    return this.client.post<{ token: string }>(this.pathL, login, { responseType: 'json' });
  }
  
  

  public register(register: RegisterUser): Observable<string> {
    return this.client.post(this.pathR, register, { responseType: 'text' });
  }

  getJWT(): string {
    return localStorage.getItem("token");
  }

  removeToken() {
    localStorage.removeItem("token");
  }
}

// ✅ Define User Model
export class User {
  username: String;
  password: String;
  constructor(username: string, password: string) {
    this.username = username;
    this.password = password;
  }
}

// ✅ Define RegisterUser Model
export class RegisterUser {
  username: string;
  email: string;
  password: string;
  roles: string;
  constructor(username: string, email: string, password: string, roles: string) {
    this.username = username;
    this.email = email;
    this.password = password;
    this.roles = roles;
  }
}
