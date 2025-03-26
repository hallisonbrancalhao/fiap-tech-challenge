import { Component, DestroyRef, inject, OnInit } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { LineChartComponent } from '../line-chart/line-chart.component';
import { PieChartComponent } from '../pie-chart/pie-chart.component';
import { TransactionFacade } from '@fiap-tech-challenge/dashboard-data-access';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-tabs',
  imports: [MatTabsModule, LineChartComponent, PieChartComponent],
  templateUrl: './tabs.component.html',
})
export class AppTabsComponent implements OnInit {
  #transactionFacade = inject(TransactionFacade);
  #destroyRef = inject(DestroyRef)

  transactions$ = this.#transactionFacade.transactions$;
  depositTransactions$ = this.#transactionFacade.depositTransactions$;
  withdrawTransactions$ = this.#transactionFacade.withdrawTransactions$;
  transferTransactions$ = this.#transactionFacade.transferTransactions$;

  ngOnInit() {
    this.#transactionFacade.getTransactions()
      .pipe(takeUntilDestroyed(this.#destroyRef))
      .subscribe()
  }
}
