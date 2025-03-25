import { DestroyRef, inject, Injectable, signal } from '@angular/core';
import { AuthRepository } from '../infrastructure';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { AuthUser, RegisterUser } from '@fiap-tech-challenge/shared-domain';

@Injectable({ providedIn: 'root' })
export class AuthFacade {
  #repository = inject(AuthRepository)
  #destroyRef = inject(DestroyRef)

  #isLogged = signal<boolean>(false)
  isLogged$ = this.#isLogged.asReadonly()

  #token = signal<string | null>(null)
  token$ = this.#token.asReadonly()

  #userName = signal<string>('')
  userName$ = this.#userName.asReadonly()

  #error = signal<string | null>(null)
  error$ = this.#error.asReadonly()

  storeToken(token: string) {
    localStorage.setItem('token', token)
  }

  getAuthenticatedUser() {
    const token = localStorage.getItem('token')
    if (token) {
      this.#isLogged.set(true)
      this.#token.set(token)
      this.getUser()
      return true;
    }

    return false;
  }

  login(credentials: AuthUser) {
    this.#error.set(null)
    return this.#repository.login(credentials).pipe(takeUntilDestroyed(this.#destroyRef)).subscribe({
      next: ({ data, errors }) => {
        if (data && !errors) {
          this.#token.set(data.login.accessToken)
          this.storeToken(data.login.accessToken)
          this.#isLogged.set(true);
        }
        if (!data && errors) {
          this.#isLogged.set(false);
          this.#error.set(errors[0].message)
        }
      },
      error: () => this.#error.set('Erro ao realizar login')
    })
  }

  register(credentials: RegisterUser) {
    this.#error.set(null)
    return this.#repository.register(credentials).pipe(takeUntilDestroyed(this.#destroyRef)).subscribe({
      next: ({ data, errors }) => {
        if (data && !errors) this.#isLogged.set(true)
        if (!data && errors) {
          this.#isLogged.set(false);
          this.#error.set('Erro ao criar o cadastro')
        }
      },
      error: () => this.#error.set('Erro ao criar o cadastro')
    })
  }

  getUser() {
    return this.#repository.getUser()
      .pipe(takeUntilDestroyed(this.#destroyRef))
      .subscribe({
        next: ({ name }) => this.#userName.set(name)
      })
  }
}
