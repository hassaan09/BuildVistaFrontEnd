import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { AuthService } from '../services/auth/auth.service';
import { catchError, switchMap, throwError } from 'rxjs';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const authService = inject(AuthService);

  // Clone the request with the access token if available
  const accessToken = authService.getAccessToken();
  const clonedRequest = accessToken
    ? req.clone({ setHeaders: { Authorization: `Bearer ${accessToken}` } })
    : req;

  return next(clonedRequest).pipe(
    catchError((error) => {
      if (error.status === 401) {
        // Attempt to refresh the access token
        return authService.refreshAccessToken().pipe(
          switchMap(() => {
            const newAccessToken = authService.getAccessToken();
            const retriedRequest = req.clone({
              setHeaders: { Authorization: `Bearer ${newAccessToken}` },
            });
            return next(retriedRequest);
          })
        );
      }
      return throwError(() => error);
    })
  );
};
