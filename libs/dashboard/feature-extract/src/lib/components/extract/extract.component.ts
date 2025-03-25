import { Component } from '@angular/core';
import { DecimalPipe, NgClass, NgForOf } from '@angular/common';

@Component({
  selector: 'app-dashboard-extract',
  templateUrl: './extract.component.html',
  standalone: true,
  imports: [NgClass, NgForOf, DecimalPipe],
})
export class ExtractComponent {
  transactions = [
    { month: 'Novembro', type: 'Depósito', amount: 150, date: '18/11/2022' },
    { month: 'Novembro', type: 'Depósito', amount: 100, date: '21/11/2022' },
    { month: 'Novembro', type: 'Depósito', amount: 50, date: '21/11/2022' },
    { month: 'Novembro', type: 'Transferência', amount: -500, date: '21/11/2022' },
  ];
}
