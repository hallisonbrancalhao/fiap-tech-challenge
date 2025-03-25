import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-my-cards',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './my-cards.component.html',
})
export class MyCardsComponent {
  cartoes = [
    {
      tipo: 'Cartão Físico',
      nome: 'Nome mockado',
      numero: '**** **** **** 1234',
      acoes: ['Bloquear', 'Ajustar Limite'],
      funcao: ['Débito/Crédito'],
    },
    {
      tipo: 'Cartão Digital',
      nome: 'Nome mockado',
      numero: '**** **** **** 5678',
      acoes: ['Gerar CVV', 'Cancelar'],
      funcao: ['Débito'],
    },
  ];
}
