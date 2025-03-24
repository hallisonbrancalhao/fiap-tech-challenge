import { inject, Injectable } from '@angular/core';
import { GET_TOKEN_QUERY } from './get-token.query';
import { Apollo } from 'apollo-angular';
import { AuthUser, RegisterUser } from '@fiap-tech-challenge/shared-domain';
import { CREATE_USER } from './create-user.mutate';

@Injectable({ providedIn: 'root' })
export class AuthRepository {
  #apollo = inject(Apollo);

  login(credentials: AuthUser) {
    return this.#apollo.mutate({
      mutation: GET_TOKEN_QUERY,
      variables: {
        credentials
      },
    });
  }

  register(user: RegisterUser) {
    return this.#apollo.mutate({
      mutation: CREATE_USER,
      variables: {
        user
      },
    });
  }
}
