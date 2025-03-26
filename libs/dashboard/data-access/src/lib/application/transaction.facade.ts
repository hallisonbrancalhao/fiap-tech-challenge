import { DestroyRef, inject, Injectable, signal } from '@angular/core';
import { TransactionRepository } from '../infrastructure';
import {
  Transaction,
  TransactionsTypes,
  Amount,
  CreateTransaction,
  DataPieChart
} from '@fiap-tech-challenge/dashboard-domain';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { shareReplay, tap } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class TransactionFacade {
  #repository = inject(TransactionRepository)
  #destroyRef = inject(DestroyRef)

  #transactions = signal<Transaction[]>([])
  transactions$ = this.#transactions.asReadonly()

  #depositTransactions = signal<Transaction[]>([])
  depositTransactions$ = this.#depositTransactions.asReadonly()

  #withdrawTransactions = signal<Transaction[]>([])
  withdrawTransactions$ = this.#withdrawTransactions.asReadonly()

  #transferTransactions = signal<Transaction[]>([])
  transferTransactions$ = this.#transferTransactions.asReadonly()

  #amount = signal<number>(0)
  amount$ = this.#amount.asReadonly()

  #types = signal<TransactionsTypes[]>([])
  types$ = this.#types.asReadonly()

  getTransactions() {
    return this.#repository.getTransactions().pipe(
      shareReplay<Transaction[]>(),
      tap((transactions) => {
        this.#transactions.set(transactions);
        this.#depositTransactions.set(transactions.filter(({ type }) => type === 'deposito'));
        this.#withdrawTransactions.set(transactions.filter(({ type }) => type === 'saque'));
        this.#transferTransactions.set(transactions.filter(({ type }) => type === 'transferencia'));
      })
    );
  }

  createTransaction(transaction: CreateTransaction) {
    return this.#repository.createTransaction(transaction).pipe(takeUntilDestroyed(this.#destroyRef)).subscribe({
      next: ({ type, value, createdAt }) => {
        this.#transactions.set([...this.transactions$(), { type, value, createdAt } as Transaction]);
        this.getBalance()
      }
    })
  }

  getBalance() {
    return this.#repository
      .getAmount()
      .pipe(shareReplay<Amount>(), takeUntilDestroyed(this.#destroyRef))
      .subscribe(({ balance }) => {
        this.#amount.set(balance);
      });
  }

  getTypes() {
    return this.#repository.getTypes()
      .pipe(shareReplay<TransactionsTypes[]>(),takeUntilDestroyed(this.#destroyRef))
      .subscribe((types) => this.#types.set(types))
  }

  buildLineChartData(transactions?: Transaction[]) {
    if(!transactions) return [];

    const data = new Map<string, number>();

    transactions.forEach(transaction => {
      const date = new Date(transaction.createdAt);
      const month = date.toLocaleString('pt-BR', { month: 'long' });
      data.set(month, (data.get(month) || 0) + transaction.value);
    });
    const series = Array.from(data, ([name, value]) => ({ name, value }));
    return [{
      name: 'Balanço Total',
      series: [...series],
    }];
  }

  buildPieChartData(deposits?: Transaction[], withdraws?: Transaction[], transfers?: Transaction[]) {
    const data: DataPieChart[] = [];

    if (withdraws) {
      const withdrawsValue = withdraws.reduce((acc, { value }) => acc + value, 0);
      data.push({ name: 'Saque', value: withdrawsValue * -1 });
    }

    if (deposits) {
      const depositsValue = deposits.reduce((acc, { value }) => acc + value, 0);
      data.push({ name: 'Depósito', value: depositsValue });
    }

    if (transfers) {
      const transfersValue = transfers.reduce((acc, { value }) => acc + value, 0);
      data.push({ name: 'Transferência', value: transfersValue * -1 });
    }

    return data;
  }
}
