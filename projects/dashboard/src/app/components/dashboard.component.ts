import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import {
  HeaderDashboardComponent,
  SidebarDashboardComponent,
} from '@fiap-tech-challenge/ui-components';
import { AuthFacade } from '@fiap-tech-challenge/shared-data-access';
import { DashboardOverviewComponent } from '@fiap-tech-challenge/feature-info';
import { ExtractComponent } from '@fiap-tech-challenge/feature-extract';
import { OptionsPanelComponent } from '../../../../../libs/dashboard/feature-info/src/lib/components/options-panel/options-panel.component';
import { MyCardsComponent } from '../../../../../libs/dashboard/feature-info/src/lib/components/my-cards/my-cards.components';

@Component({
  selector: 'app-dashboard',
  imports: [
    CommonModule,
    HeaderDashboardComponent,
    DashboardOverviewComponent,
    SidebarDashboardComponent,
    ExtractComponent,
    OptionsPanelComponent,
    MyCardsComponent,
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
