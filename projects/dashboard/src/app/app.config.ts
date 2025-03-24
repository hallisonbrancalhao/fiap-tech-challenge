import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { appRoutes } from './app.routes';
import { AuthFacade, AuthRepository } from '@fiap-tech-challenge/institutional-data-access';


const FACADES = [ AuthFacade ];
const REPOSITORIES = [ AuthRepository ];


export const appConfig: ApplicationConfig = {
  providers: [
    ...FACADES,
    ...REPOSITORIES,
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(appRoutes),
  ],
};
