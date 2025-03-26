import { inject, Injectable, signal } from '@angular/core';
import { AuthRepository } from '../infrastructure';

import { AuthUser, RegisterUser } from '@fiap-tech-challenge/shared-domain';
import { catchError, shareReplay, tap } from 'rxjs';
import { CreateUserResult } from '../infrastructure/create-user.mutate';
import { MutationResult } from 'apollo-angular';

@Injectable({ providedIn: 'root' })
export class AuthFacade {
  #repository = inject(AuthRepository)

  #isLogged = signal<boolean>(false)
  isLogged$ = this.#isLogged.asReadonly()

  #token = signal<string | null>(null)
  token$ = this.#token.asReadonly()

  #userName = signal<string>('')
  userName$ = this.#userName.asReadonly()

  #error = signal<string | null>(null)
  error$ = this.#error.asReadonly()

  private storeToken(token: string) {
    localStorage.setItem('token', token)
  }

  private getToken() {
    const token = localStorage.getItem('token')
    if (token) this.#token.set(token)
  }

  getAuthenticatedUser() {
    if(!this.token$()) this.getToken()
    if (this.token$()) {
      this.#isLogged.set(true)
      this.getUser()
      return true;
    }
    return false;
  }

  login(credentials: AuthUser) {
    this.#error.set(null)
    return this.#repository.login(credentials).pipe(
      tap(({ data, errors }) => {
        if (data && !errors) {
          this.#isLogged.set(true)
          this.storeToken(data.login.accessToken)
        }
        if (!data && errors) {
          this.#isLogged.set(false)
          this.#error.set('Erro ao logar')
        }
      }),
    )
  }

  register(credentials: RegisterUser) {
    this.#error.set(null)
    return this.#repository.register(credentials).pipe(
      shareReplay<MutationResult<CreateUserResult>>(),
      tap(({ data, errors }) => {
        if (data && !errors) this.#isLogged.set(true)
        if (!data && errors) {
          this.#isLogged.set(false)
          this.#error.set('Erro ao criar o cadastro')
        }
      }),
    )
  }

  getUser() {
    if(!this.token$()) this.getToken();
    return this.#repository.getUser()
      .pipe(
        shareReplay<RegisterUser>(),
        tap((user) => {
          this.#userName.set(user.name)
        })
      )
  }

  logout() {
    this.#isLogged.set(false)
    this.#token.set(null)
    this.#userName.set('')
    localStorage.removeItem('token')
  }
}
