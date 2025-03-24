import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { AuthFacade } from '@fiap-tech-challenge/institutional-data-access';

export const authGuard: CanActivateFn = () => {
  const router = inject(Router);
  const service = inject(AuthFacade)

  console.log('authGuard', service.isLogged$());

  if (service.getAuthenticatedUser()) {
    return true;
  }

  router.navigate(['/'])
  return false;
}
