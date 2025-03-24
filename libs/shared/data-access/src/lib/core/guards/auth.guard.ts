import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { AuthFacade } from '../../application';


export const authGuard: CanActivateFn = () => {
  const router = inject(Router);
  const service = inject(AuthFacade)

  if (service.getAuthenticatedUser()) {
    return true;
  }

  router.navigate(['/'])
  return false;
}
