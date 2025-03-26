import { Component, effect, inject, input, OnInit } from '@angular/core';
import { LineChartModule } from '@swimlane/ngx-charts';
import { TransactionFacade, Transaction } from '@fiap-tech-challenge/dashboard-data-access';
import { DataLineChart } from '@fiap-tech-challenge/dashboard-data-access';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  standalone: true,
  imports: [LineChartModule],
})
export class LineChartComponent implements OnInit {
  transactions = input<Transaction[]>();
  #transactionsFacade = inject(TransactionFacade);

  multi: DataLineChart[] = [];
  view: [number, number] = [720, 500];

  // options
  legend = true;
  animations = true;
  xAxis = true;
  yAxis = true;
  showYAxisLabel = true;
  showXAxisLabel = true;
  xAxisLabel = 'Mês';
  yAxisLabel = 'Valor';
  timeline = true;

  ngOnInit() {
    if (!this.transactions()) return;
    this.multi = this.#transactionsFacade.buildLineChartData(this.transactions())
  }

  constructor() {
    effect(() => {
      if (!this.transactions()) return;
      this.multi = this.#transactionsFacade.buildLineChartData(this.transactions())
    });
  }
}
