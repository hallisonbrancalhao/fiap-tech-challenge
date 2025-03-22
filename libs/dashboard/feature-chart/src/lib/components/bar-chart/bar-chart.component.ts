import { Component, ViewChild } from '@angular/core';
import {
  BarElement,
  CategoryScale,
  ChartConfiguration,
  ChartData,
  LinearScale,
} from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import {
  Chart,
  BarController,
  Tooltip,
  Legend,
} from 'chart.js';
Chart.register(
  BarController,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend
);

@Component({
  selector: 'app-bar-chart',
  imports: [BaseChartDirective],
  templateUrl: './bar-chart.component.html',
})
export class BarChartComponent {
  @ViewChild(BaseChartDirective) chart: BaseChartDirective<'bar'> | undefined;

  public barChartOptions: ChartConfiguration<'bar'>['options'] = {
    scales: {
      x: {},
      y: {
        min: 10,
      },
    },
    plugins: {
      legend: {
        display: true,
      },
      datalabels: {
        anchor: 'end',
        align: 'end',
      },
    },
    responsive: true,
    maintainAspectRatio: false,
  };
  public barChartType = 'bar' as const;

  public barChartData: ChartData<'bar'> = {
    labels: [
      'set/24',
      'out/24',
      'nov/24',
      'dez/24',
      'jan/25',
      'fev/25',
      'mar/25',
    ],
    datasets: [
      { data: [65, 59, 80, 81, 56, 55, 40], label: 'Ações' },
      { data: [28, 48, 40, 19, 86, 27, 90], label: 'Renda Fixa' },
      { data: [28, 48, 40, 19, 86, 27, 90], label: 'Imóveis' },
    ],
  };
}
