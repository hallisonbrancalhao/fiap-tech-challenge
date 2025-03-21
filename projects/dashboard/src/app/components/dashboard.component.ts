import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { AppTabsComponent, BarChartComponent, CompositionChartComponent } from "@fiap-tech-challenge/chart";

@Component({
  selector: "app-dashboard",
  imports: [
    CommonModule,
    AppTabsComponent,
    BarChartComponent,
    CompositionChartComponent,
  ],
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent {
  selectedOption = 'Composição de Investimentos';

  tabsList = ['Composição de Investimentos', 'Investimento vs Tempo'];

  onOptionSelected(option: string) {
    this.selectedOption = option;
  }
}
