import { Component, inject, input, signal } from '@angular/core';
import { NgForOf, NgIf } from '@angular/common';
import { UiModalComponent } from '../ui-modal/ui-modal.component';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { MenuFacade } from '@fiap-tech-challenge/shared-data-access';

@Component({
  selector: 'ui-header-dashboard',
  templateUrl: './header-dashboard.component.html',
  styleUrls: ['./header-dashboard.component.scss'],
  standalone: true,
  providers: [MenuFacade],
  imports: [NgIf, UiModalComponent, NgForOf, RouterLink, RouterLinkActive],
})
export class HeaderDashboardComponent {
  #menuFacade = inject(MenuFacade);

  menuOptions = this.#menuFacade.menuOptions$;
  email = input.required<string>();

  isModalOpen = signal(false);

  openModal() {
    this.isModalOpen.set(true);
  }

  closeModal() {
    this.isModalOpen.set(false);
  }
}
