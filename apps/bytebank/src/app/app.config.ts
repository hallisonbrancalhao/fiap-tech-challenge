import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { appRoutes } from './app.routes';
import { baseProviders } from '@fiap-tech-challenge/shared-data-access';

export const appConfig: ApplicationConfig = {
  providers: [
    ...baseProviders,
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(appRoutes),
  ],
};
