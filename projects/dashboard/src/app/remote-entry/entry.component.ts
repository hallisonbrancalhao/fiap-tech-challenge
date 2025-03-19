import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from "../components/dashboard.component";

@Component({
  imports: [CommonModule, DashboardComponent],
  selector: 'app-dashboard-entry',
  template: `<app-dashboard />`,
})
export class RemoteEntryComponent {}
