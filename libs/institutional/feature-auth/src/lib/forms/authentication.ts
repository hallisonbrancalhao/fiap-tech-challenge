import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TypedForm } from '@fiap-tech-challenge/ui-global';
import { AuthUser } from '@fiap-tech-challenge/domain';

export class AuthenticationForm extends FormGroup<TypedForm<AuthUser>> {
  constructor() {
    super({
      email: new FormControl('', {
        nonNullable: true,
        validators: [Validators.required, Validators.email],
      }),
      password: new FormControl('', {
        nonNullable: true,
      }),
    });
  }
}
