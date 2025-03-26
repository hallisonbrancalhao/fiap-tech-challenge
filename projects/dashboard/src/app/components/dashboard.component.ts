import { CommonModule } from '@angular/common';
import { Component, DestroyRef, inject, OnInit } from '@angular/core';
import {
  HeaderDashboardComponent,
  SidebarDashboardComponent,
} from '@fiap-tech-challenge/ui-components';
import { AuthFacade } from '@fiap-tech-challenge/shared-data-access';
import { ExtractComponent } from '@fiap-tech-challenge/feature-extract';
import { DashboardOverviewComponent} from '@fiap-tech-challenge/feature-info';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-dashboard',
  imports: [
    CommonModule,
    HeaderDashboardComponent,
    DashboardOverviewComponent,
    SidebarDashboardComponent,
    ExtractComponent
  ],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  #authFacade = inject(AuthFacade);
  #destroyRef = inject(DestroyRef)

  userName = this.#authFacade.userName$;

  ngOnInit() {
    this.#authFacade.getUser().pipe(takeUntilDestroyed(this.#destroyRef)).subscribe()
  }
}
