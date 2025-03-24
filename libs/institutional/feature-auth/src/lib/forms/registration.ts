import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TypedForm } from '@fiap-tech-challenge/ui-global';
import { RegisterUser } from '@fiap-tech-challenge/domain';


export class RegistrationForm extends FormGroup<TypedForm<RegisterUser>> {
  constructor() {
    super({
      name: new FormControl('', {
        nonNullable: true,
        validators: [Validators.required],
      }),
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
