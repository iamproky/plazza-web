// auth.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { environment } from '../../environments/environment';

interface AuthResponse {
  id: string;
  name: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private currentUserSubject: BehaviorSubject<string | null>;
  public currentUser: Observable<string | null>;

  constructor(private http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<string | null>(this.getCurrentUserFromStorage());
    this.currentUser = this.currentUserSubject.asObservable();
  }

  private getCurrentUserFromStorage(): string | null {
    return sessionStorage.getItem('username');
  }

  login(email: string, password: string): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(`${environment.api_url}/login`, { email, password })
      .pipe(
        tap(response => {
          sessionStorage.setItem('username', response.name);
          this.currentUserSubject.next(response.name);
        })
      );
  }

  signup(name: string, email: string, password: string): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(`${environment.api_url}/signup`, { name, email, password })
      .pipe(
        tap(response => {
          sessionStorage.setItem('username', response.name);
          this.currentUserSubject.next(response.name);
        })
      );
  }

  logout(): void {
    sessionStorage.removeItem('username');
    this.currentUserSubject.next(null);
  }
}
