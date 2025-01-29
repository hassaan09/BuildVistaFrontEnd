import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, catchError, map, throwError } from 'rxjs';
import { environment } from '../../constants/environment'; // Import environment config

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = environment.local.apiUrl; // Use the backend API URL from environment
  private accessTokenSubject = new BehaviorSubject<string | null>(null);

  constructor(private http: HttpClient) {}

  // Register as Client
  registerClient(clientData: any): Observable<void> {
    return this.http.post(`${this.apiUrl}/register/client`, clientData).pipe(
      map(() => {

      }),
      catchError((error) => throwError(() => error))
    );
  }

  // Register as Contractor
  registerContractor(contractorData: any): Observable<void> {
    console.log('service',contractorData);
    
    return this.http.post(`${this.apiUrl}/register/contractor`, contractorData).pipe(
      map(() => {}),
      catchError((error) => throwError(() => error))
    );
  }

  // Verify OTP
  verifyOtp(payload: { otp: string; email: string }): Observable<void> {
  return this.http.post<void>(`${this.apiUrl}/verify-otp`, payload).pipe(
    catchError((error) => throwError(() => error))
  );
}

  // Login API call
  login(email: string, password: string): Observable<void> {
    return this.http.post(`${this.apiUrl}/login`, { email, password }).pipe(
      map((response: any) => {
        const { accessToken, refreshToken, user } = response;
        this.storeTokens(accessToken, refreshToken);
        localStorage.setItem('User', JSON.stringify(user))
      }),
      catchError((error) => throwError(() => error))
    );
  }

  // Refresh token API call
  refreshAccessToken(): Observable<void> {
    const refreshToken = localStorage.getItem('refreshToken');
    if (!refreshToken) {
      return throwError(() => new Error('No refresh token available'));
    }

    return this.http.post(`${this.apiUrl}/refresh`, { refreshToken }).pipe(
      map((response: any) => {
        const { accessToken } = response;
        this.storeTokens(accessToken, refreshToken);
      }),
      catchError((error) => throwError(() => error))
    );
  }

  // Logout API call
  logout(): Observable<void> {
    const refreshToken = localStorage.getItem('refreshToken');
    return this.http.post(`${this.apiUrl}/logout`, { refreshToken }).pipe(
      map(() => {
        this.clearTokens();

      }),
      catchError((error) => throwError(() => error))
    );
  }

  // Get current access token
  getAccessToken(): string | null {
    return this.accessTokenSubject.value || localStorage.getItem('accessToken');
  }

  // Get Login User

  getLoginUser(){
    const storedUser = localStorage.getItem('User');
    if (storedUser !== null) {
      return JSON.parse(storedUser);
    }
  }

  // Store tokens in localStorage
  private storeTokens(accessToken: string, refreshToken: string): void {
    localStorage.setItem('accessToken', accessToken);
    localStorage.setItem('refreshToken', refreshToken);
    this.accessTokenSubject.next(accessToken);
  }

  // Clear tokens from storage
  private clearTokens(): void {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
    localStorage.clear();
    this.accessTokenSubject.next(null);
  }

  // Check if the user is logged in
  isLoggedIn(): boolean {
    return !!this.getAccessToken();
  }
}
