import { Component, DestroyRef, inject } from '@angular/core';
import { DialogRef } from '@angular/cdk/dialog';
import { AuthFacade } from '@fiap-tech-challenge/shared-data-access';
import { RegistrationForm } from '../../forms';
import { ReactiveFormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-auth-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  standalone: true,
  imports: [ReactiveFormsModule, NgIf],
})
export class AuthRegisterComponent {
  #dialogRef = inject(DialogRef<AuthRegisterComponent>);
  #facade = inject(AuthFacade);
  #destroyRef = inject(DestroyRef);

  error = this.#facade.error$;

  form = new RegistrationForm();

  close(): void {
    this.#dialogRef.close();
  }

  submit() {
    if (this.form.invalid) return;
    this.#facade
      .register(this.form.getRawValue())
      .pipe(takeUntilDestroyed(this.#destroyRef))
      .subscribe(() => this.close());
  }
}
