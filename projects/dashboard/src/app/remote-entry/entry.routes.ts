import { Route } from '@angular/router';
import { RemoteEntryComponent } from './entry.component';
import { authGuard } from '@fiap-tech-challenge/shared-data-access';
import { CreateTransactionComponent } from '@fiap-tech-challenge/feature-info';

export const remoteRoutes: Route[] = [
  {
    path: '',
    component: RemoteEntryComponent,
    canActivate: [authGuard],
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'home'
      },
      {
        path: 'home',
        component: CreateTransactionComponent
      }
    ]
  },
];
