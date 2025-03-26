import { Component, effect, inject, input } from '@angular/core';
import { LegendPosition, PieChartModule } from '@swimlane/ngx-charts';
import { TransactionFacade, DataPieChart, Transaction  } from '@fiap-tech-challenge/dashboard-data-access';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  standalone: true,
  imports: [PieChartModule],
})
export class PieChartComponent {
  depositTransactions = input<Transaction[]>();
  withdrawTransactions = input<Transaction[]>();
  transferTransactions = input<Transaction[]>();

  #transactionsFacade = inject(TransactionFacade);

  data: DataPieChart[] = [];
  view: [number, number] = [720, 500];

  gradient = true;
  showLegend = true;
  showLabels = true;
  isDoughnut = false;
  legendPosition: LegendPosition = LegendPosition.Below;

  constructor() {
    effect(() => {
      if (!this.depositTransactions() && !this.withdrawTransactions() && !this.transferTransactions) return;
      this.data = this.#transactionsFacade.buildPieChartData(
        this.depositTransactions(),
        this.withdrawTransactions(),
        this.transferTransactions()
      )
    });
  }

}
