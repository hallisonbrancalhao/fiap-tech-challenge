import { Component, DestroyRef, inject } from '@angular/core';
import { DialogRef } from '@angular/cdk/dialog';
import { AuthenticationForm } from '../../forms';
import { ReactiveFormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';
import { AuthFacade } from '@fiap-tech-challenge/shared-data-access';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';


@Component({
  selector: 'app-auth-login',
  templateUrl: './auth-login.component.html',
  styleUrls: ['./auth-login.component.scss'],
  imports: [ReactiveFormsModule, NgIf],
  standalone: true,
})
export class AuthLoginComponent {
  #dialogRef = inject(DialogRef<AuthLoginComponent>);

  #destroyRef = inject(DestroyRef);
  #facade = inject(AuthFacade);

  isLogged = this.#facade.isLogged$;
  error = this.#facade.error$;

  form = new AuthenticationForm();

  close(): void {
    this.#dialogRef.close();
  }

  submit() {
    if (this.form.invalid) return;
    this.#facade.login(this.form.getRawValue())
      .pipe(takeUntilDestroyed(this.#destroyRef))
      .subscribe(() => this.close())
  }
}
