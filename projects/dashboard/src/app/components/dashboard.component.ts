import { CommonModule } from "@angular/common";
import { Component, inject, OnInit } from '@angular/core';
import { HeaderDashboardComponent } from '@fiap-tech-challenge/ui-components';
import { AuthFacade } from '@fiap-tech-challenge/shared-data-access';

@Component({
  selector: 'app-dashboard',
  imports: [CommonModule, HeaderDashboardComponent],
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent implements OnInit {
  #authFacade = inject(AuthFacade);

  userEmail = this.#authFacade.userEmail$;

  ngOnInit() {
    this.#authFacade.getAuthenticatedUser();
  }
}
