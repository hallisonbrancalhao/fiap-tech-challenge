import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: '',
    loadChildren: () =>
      import('institutional/Routes').then((m) => m.remoteRoutes),
  },
  {
    path: 'dashboard',
    loadChildren: () => import('dashboard/Routes').then((m) => m.remoteRoutes),
  }
];
