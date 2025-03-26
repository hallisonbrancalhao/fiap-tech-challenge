import { Component, effect, inject, input, Input, OnInit } from '@angular/core';
import { LineChartModule } from '@swimlane/ngx-charts';
import { Transaction } from '@fiap-tech-challenge/dashboard-domain';
import { TransactionFacade } from '@fiap-tech-challenge/dashboard-data-access';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  standalone: true,
  imports: [LineChartModule],
})
export class LineChartComponent implements OnInit {
  transactions = input<Transaction[]>();
  #transactionsFacade = inject(TransactionFacade);

  multi: any[] = [];
  view: [number, number] = [720, 500];

  // options
  legend = true;
  animations = true;
  xAxis = true;
  yAxis = true;
  showYAxisLabel = true;
  showXAxisLabel = true;
  xAxisLabel = 'Month';
  yAxisLabel = 'Value';
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
