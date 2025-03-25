import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-options-panel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './options-panel.component.html',
})
export class OptionsPanelComponent {
  @Input() title: string = 'Confira os serviços disponíveis';
  @Input() options: string[] = [
    'Empréstimo',
    'Meus Cartões',
    'Doações',
    'Pix',
    'Seguros',
    'Crédito celular',
  ];

  @Output() optionSelected = new EventEmitter<string>();

  selectOption(option: string) {
    this.optionSelected.emit(option);
  }
}
