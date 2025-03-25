import { Component, input, signal } from '@angular/core';
import { NgForOf, NgIf } from '@angular/common';
import { UiModalComponent } from '../ui-modal/ui-modal.component';

@Component({
  selector: 'ui-header-dashboard',
  templateUrl: './header-dashboard.component.html',
  styleUrls: ['./header-dashboard.component.scss'],
  standalone: true,
  imports: [NgIf, UiModalComponent, NgForOf],
})
export class HeaderDashboardComponent {
  email = input.required<string>();
  menuOptions = input<string[]>([
    'Início',
    'Transferências',
    'Investimentos',
    'Outros serviços',
  ]);

  isModalOpen = signal(false);

  openModal() {
    this.isModalOpen.set(true);
  }

  closeModal() {
    this.isModalOpen.set(false);
  }
}
