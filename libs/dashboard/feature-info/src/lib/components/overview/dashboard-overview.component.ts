import { Component, Input, signal } from '@angular/core';
import { CurrencyPipe, DatePipe } from '@angular/common';

@Component({
  selector: 'app-dashboard-overview',
  templateUrl: './dashboard-overview.component.html',
  standalone: true,
  imports: [DatePipe, CurrencyPipe],
})
export class DashboardOverviewComponent {
  @Input() name!: string;
  @Input() balance!: number;

  isBalanceVisible = signal(true);

  currentDate = new Date();

  toggleBalance() {
    this.isBalanceVisible.update((v) => !v);
  }
}
