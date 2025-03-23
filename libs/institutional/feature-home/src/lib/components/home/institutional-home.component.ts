import { Component } from '@angular/core';
import { FooterInstitutionalComponent, HeaderInstitutionalComponent } from '@fiap-tech-challenge/ui-components';

@Component({
  selector: 'app-institutional-home',
  templateUrl: './institutional-home.component.html',
  styleUrls: ['./institutional-home.component.scss'],
  imports: [HeaderInstitutionalComponent, FooterInstitutionalComponent],
  standalone: true,
})
export class InstitutionalHomeComponent {}
