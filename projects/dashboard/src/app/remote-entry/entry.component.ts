import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from '../components';

@Component({
  imports: [CommonModule, DashboardComponent],
  selector: 'app-dashboard-entry',
  template: `<app-dashboard />`,
  encapsulation: ViewEncapsulation.None
})
export class RemoteEntryComponent {}
