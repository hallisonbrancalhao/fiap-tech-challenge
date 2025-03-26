import { Component, DestroyRef, inject, OnInit } from '@angular/core';
import { CurrencyPipe, DatePipe, NgClass, NgForOf, TitleCasePipe } from '@angular/common';
import { TransactionFacade } from '@fiap-tech-challenge/dashboard-data-access';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

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
  #destroyRef = inject(DestroyRef)

  transactions$ = this.#transactionsFacade.transactions$;

  ngOnInit() {
    this.#transactionsFacade.getTransactions().pipe(takeUntilDestroyed(this.#destroyRef)).subscribe()
  }
}
