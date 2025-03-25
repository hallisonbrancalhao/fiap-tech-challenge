import { DestroyRef, inject, Injectable, signal } from '@angular/core';
import { TransactionRepository } from '../infrastructure';
import { Transaction, TransactionsTypes, Amount, CreateTransaction } from '@fiap-tech-challenge/dashboard-domain';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { shareReplay } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class TransactionFacade {
  #repository = inject(TransactionRepository)
  #destroyRef = inject(DestroyRef)

  #transactions = signal<Transaction[]>([])
  transactions$ = this.#transactions.asReadonly()

  #transaction = signal<Transaction | null>(null)
  transaction$ = this.#transaction.asReadonly()

  #amount = signal<number>(0)
  amount$ = this.#amount.asReadonly()

  #types = signal<TransactionsTypes[]>([])
  types$ = this.#types.asReadonly()

  getTransactions() {
    return this.#repository.getTransactions()
      .pipe(shareReplay<Transaction[]>(),takeUntilDestroyed(this.#destroyRef)).subscribe({
      next: (transactions) => this.#transactions.set(transactions)
    })
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
}
