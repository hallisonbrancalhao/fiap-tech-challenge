import { provideApollo } from 'apollo-angular';
import { inject } from '@angular/core';
import { HttpLink } from 'apollo-angular/http';
import { InMemoryCache } from '@apollo/client';
import { environment } from '../environments/environment.dev';


export const apolloProviders = [
  provideApollo(() => {
    const httpLink = inject(HttpLink);
    return {
      link: httpLink.create({ uri: `${environment.apiUrl}/graphql` }),
      cache: new InMemoryCache(),
    };
  }),
]
