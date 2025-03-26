import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Transaction, TransactionsTypes, Amount, CreateTransaction } from '../dtos';

@Injectable({ providedIn: 'root' })
export class TransactionRepository {
  #http = inject(HttpClient)

  getTransactions() {
    return this.#http.get<Transaction[]>(`/transactions`)
  }

  createTransaction(transaction: CreateTransaction) {
    return this.#http.post<Partial<Transaction>>(`/transactions`, transaction)
  }

  getAmount() {
    return this.#http.get<Amount>('/transactions/balance')
  }

  getTypes() {
    return this.#http.get<TransactionsTypes[]>('/transactions/types')
  }
}
