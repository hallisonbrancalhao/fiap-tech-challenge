import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from '../components';
import { RouterOutlet } from '@angular/router';

@Component({
  imports: [CommonModule, DashboardComponent, RouterOutlet],
  selector: 'app-dashboard-entry',
  template: `
    <app-dashboard>
      <router-outlet/>
    </app-dashboard>
  `,
  encapsulation: ViewEncapsulation.None,
})
export class RemoteEntryComponent {}
