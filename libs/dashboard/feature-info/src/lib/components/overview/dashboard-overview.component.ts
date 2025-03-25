import { Component, inject, input, OnInit, signal } from '@angular/core';
import { CurrencyPipe, DatePipe } from '@angular/common';
import { TransactionFacade } from '@fiap-tech-challenge/dashboard-data-access';

@Component({
  selector: 'app-dashboard-overview',
  templateUrl: './dashboard-overview.component.html',
  standalone: true,
  imports: [DatePipe, CurrencyPipe],
})
export class DashboardOverviewComponent implements OnInit {
  name = input.required<string>()

  #transactionFacade = inject(TransactionFacade);

  amount$ = this.#transactionFacade.amount$;
  isBalanceVisible = signal(true);
  currentDate = new Date();

  ngOnInit() {
    this.#transactionFacade.getBalance();
  }

  toggleBalance() {
    this.isBalanceVisible.update((v) => !v);
  }
}
