import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AuthData } from 'src/models/authentication.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient, private router: Router) {}

  userLogin(authData: AuthData) {
    return this.http.post('https://localhost:7109/api/auth/login', authData);
    // .subscribe({
    //   next: (response) => {
    //     localStorage.setItem('isAuthenticated', 'true');
    //     this.router.navigate(['']);
    //   },
    //   error: (err) => {
    //     console.log({ err });
    //   },
    // });
  }
}
