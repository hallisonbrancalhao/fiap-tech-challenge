import { Component, inject } from '@angular/core';
import { DialogRef } from '@angular/cdk/dialog';
import { AuthFacade } from '@fiap-tech-challenge/institutional-data-access';
import { RegistrationForm } from '../../forms';
import { ReactiveFormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';

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

  form = new RegistrationForm();

  close(): void {
    this.#dialogRef.close();
  }

  submit() {
    console.log(this.form.getRawValue());
    console.log('this.form.invalid', this.form.invalid);
    if (this.form.invalid) return;
    this.#facade.register(this.form.getRawValue()).add(
      () => this.close()
    )
  }
}
