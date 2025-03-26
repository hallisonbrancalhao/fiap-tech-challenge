import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { apolloProviders} from './apolo.providers';
import { loggingInterceptor } from '../interceptors';
import { facadesProviders } from './facades.providers';
import { repositoriesProviders } from './repositories.providers';

export const baseProviders = [
  ...apolloProviders,
  ...facadesProviders,
  ...repositoriesProviders,
  provideHttpClient(withInterceptors([loggingInterceptor])),
  provideAnimationsAsync(),
]
