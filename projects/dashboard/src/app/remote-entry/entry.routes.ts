import { Route } from '@angular/router';
import { RemoteEntryComponent } from './entry.component';
import { authGuard } from '@fiap-tech-challenge/shared-data-access';

export const remoteRoutes: Route[] = [
  {
    path: '',
    component: RemoteEntryComponent,
    canActivate: [authGuard]
  },
];
