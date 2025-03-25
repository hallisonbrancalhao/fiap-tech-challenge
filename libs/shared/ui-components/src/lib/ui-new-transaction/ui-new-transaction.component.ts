import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RouterModule } from '@angular/router';
//import { TransactionValue, transactionOptions } from '@domain';
//import { TransactionService } from '@services/transaction.service';

@Component({
  selector: 'app-new-transaction',
  templateUrl: './ui-new-transaction.component.html',
  imports: [RouterModule],
  standalone: true,
})
export class NewTransactionComponent implements OnInit {
  transactionForm: FormGroup;
  transactionOptions: { value: string; label: string }[] = [
    { value: 'saque', label: 'Saque' },
    { value: 'doc-ted', label: 'Transferência' },
    { value: 'depósito', label: 'Depósito' },
  ];

  constructor(
    private fb: FormBuilder //private transactionService: TransactionService
  ) {
    this.transactionForm = this.fb.group({
      type: ['', Validators.required],
      amount: [0.0, [Validators.required, Validators.min(0)]],
      date: ['', Validators.required],
    });
  }

  ngOnInit(): void {}

  get amount() {
    return this.transactionForm.get('amount');
  }

  get date() {
    return this.transactionForm.get('date');
  }

  get type() {
    return this.transactionForm.get('type');
  }

  async handleSaveTransaction(): Promise<void> {
    if (this.transactionForm.invalid) {
      return;
    }

    const { amount, type, date } = this.transactionForm.value;
    //try {
    //  await this.transactionService.saveTransaction({
    //    ...this.transactionForm.value,
    //    amount: this.transactionService.parseAmount(
    //      amount,
    //      type as TransactionValue
    //    ),
    //    date: new Date(date),
    //  });
    //  this.handleReset();
    //} catch (error) {
    //  console.error('Erro ao salvar transação:', error);
    //}
  }

  handleReset(): void {
    this.transactionForm.reset({
      amount: 0.0,
      date: '',
      type: '',
    });
  }
}
