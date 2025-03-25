import { Component, inject, OnInit } from '@angular/core';
import { CurrencyPipe, DatePipe, NgClass, NgForOf, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { TransactionFacade } from '@fiap-tech-challenge/dashboard-data-access';

@Component({
  selector: 'app-dashboard-extract',
  templateUrl: './extract.component.html',
  standalone: true,
  imports: [
    NgClass,
    NgForOf,
    DatePipe,
    CurrencyPipe,
    TitleCasePipe,
  ],
})
export class ExtractComponent implements OnInit {
  #transactionsFacade = inject(TransactionFacade);

  transactions$ = this.#transactionsFacade.transactions$;

  ngOnInit() {
    this.#transactionsFacade.getTransactions();
  }
}
