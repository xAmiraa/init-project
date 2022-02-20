import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Login } from '../interfaces/login';
import { catchError, Observable, throwError } from 'rxjs';
import { productController } from '../api/eexample';

import { authController } from '../api/auth';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}
  login(user: Login): Observable<any> {
    return this.http.post(authController.login, user).pipe(
      catchError((err) => {
        return throwError(() => err.message || 'Server error');
      })
    );
  }
}
