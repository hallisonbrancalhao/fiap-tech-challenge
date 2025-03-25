import { CommonModule } from "@angular/common";
import { Component, inject, OnInit } from '@angular/core';
import { HeaderDashboardComponent, SidebarDashboardComponent } from '@fiap-tech-challenge/ui-components';
import { AuthFacade } from '@fiap-tech-challenge/shared-data-access';
import { CreateTransactionComponent, DashboardOverviewComponent } from '@fiap-tech-challenge/feature-info';
import { ExtractComponent } from '@fiap-tech-challenge/feature-extract';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  imports: [
    CommonModule,
    HeaderDashboardComponent,
    DashboardOverviewComponent,
    SidebarDashboardComponent,
    ExtractComponent,
    RouterOutlet,
    CreateTransactionComponent,
  ],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  #authFacade = inject(AuthFacade);

  userName = this.#authFacade.userName$;

  ngOnInit() {
    this.#authFacade.getAuthenticatedUser();
  }
}
