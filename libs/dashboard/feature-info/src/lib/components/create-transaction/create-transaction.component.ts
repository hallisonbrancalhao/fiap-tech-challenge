import { Component, inject, OnInit } from '@angular/core';
import { TransactionFacade } from '@fiap-tech-challenge/dashboard-data-access';
import { CreateTransactionForm } from '../../forms/create-transaction.form';
import { ReactiveFormsModule } from '@angular/forms';
import { NgForOf, NgIf } from '@angular/common';

@Component({
  selector: 'app-create-transaction',
  templateUrl: './create-transaction.component.html',
  standalone: true,
  imports: [ReactiveFormsModule, NgForOf, NgIf],
})
export class CreateTransactionComponent implements OnInit {
  #transactionFacade = inject(TransactionFacade);

  form = new CreateTransactionForm();

  types$ = this.#transactionFacade.types$;

  ngOnInit() {
    this.#transactionFacade.getTypes();
  }

  createTransaction() {
    this.#transactionFacade.createTransaction(this.form.getRawValue());
  }

  handleReset() {
    this.form.reset();
  }
}
