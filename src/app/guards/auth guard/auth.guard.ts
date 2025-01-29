import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth/auth.service';
import { CanActivateFn } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);  // Inject AuthService
  const router = inject(Router);  // Inject Router
  

  // Check if the user is logged in
  const requiredRole = route.data['role'];
  const isLogin = route.data['isLogin'];
  const loginUser = authService.getLoginUser();
  if (authService.isLoggedIn()) {
    if (requiredRole && loginUser.role) {
      if (loginUser.role === requiredRole) {
        return true
      }else{
        if (loginUser.role == 'client') {
          router.navigate(['/maindashboard']);
          return false
        }
        router.navigate(['/contractorhome']);
        return false
      }
    }else if (!requiredRole && loginUser.role){
      return true
    }else{
      router.navigate(['/']);
      return false
    }
  }
  if(requiredRole && !authService.isLoggedIn() && isLogin){
    return true
  }
  // Redirect to login page if not logged in
  router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
  return false;

};
