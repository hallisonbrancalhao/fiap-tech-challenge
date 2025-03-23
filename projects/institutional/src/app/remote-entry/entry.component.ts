import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InstitutionalHomeComponent } from '@fiap-tech-challenge/feature-home';

@Component({
  imports: [CommonModule, InstitutionalHomeComponent],
  selector: 'app-institutional-entry',
  template: `<app-institutional-home />`,
})
export class RemoteEntryComponent {}
