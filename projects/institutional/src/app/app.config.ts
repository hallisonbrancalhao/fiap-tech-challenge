import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { appRoutes } from './app.routes';
import {
  provideClientHydration,
  withEventReplay,
} from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';
import { AuthFacade, AuthRepository } from '@fiap-tech-challenge/institutional-data-access';

const FACADES = [ AuthFacade ];
const REPOSITORIES = [ AuthRepository ];

export const appConfig: ApplicationConfig = {
  providers: [
    ...FACADES,
    ...REPOSITORIES,
    provideHttpClient(),
    provideClientHydration(withEventReplay()),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(appRoutes),
  ],
};
