import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TypedForm } from '@fiap-tech-challenge/ui-global';
import { CreateTransaction } from '@fiap-tech-challenge/dashboard-data-access';

export class CreateTransactionForm extends FormGroup<TypedForm<CreateTransaction>> {
  constructor() {
    super({
      value: new FormControl(0, {
        nonNullable: true,
        validators: [Validators.required, Validators.min(1)],
      }),
      type: new FormControl('', {
        nonNullable: true,
        validators: [Validators.required],
      }),
    });
  }
}
