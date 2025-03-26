import { Route } from '@angular/router';
import { RemoteEntryComponent } from './entry.component';
import { authGuard } from '@fiap-tech-challenge/shared-data-access';
import { CreateTransactionComponent, MyCardsComponent, OptionsPanelComponent } from '@fiap-tech-challenge/feature-info';
import { AppTabsComponent } from '@fiap-tech-challenge/chart';

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
      },
      {
        path: 'services',
        component: OptionsPanelComponent
      },
      {
        path: 'my-cards',
        component: MyCardsComponent
      },
      {
        path: 'investments',
        component: AppTabsComponent
      }
    ]
  },
];
