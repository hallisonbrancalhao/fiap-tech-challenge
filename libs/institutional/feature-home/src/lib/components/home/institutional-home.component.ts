import { Component, DestroyRef, inject } from '@angular/core';
import { FooterInstitutionalComponent, HeaderInstitutionalComponent } from '@fiap-tech-challenge/ui-components';
import { Dialog } from '@angular/cdk/dialog';
import { AuthLoginComponent, AuthRegisterComponent } from '@fiap-tech-challenge/feature-auth';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Router } from '@angular/router';

@Component({
  selector: 'app-institutional-home',
  templateUrl: './institutional-home.component.html',
  styleUrls: ['./institutional-home.component.scss'],
  imports: [HeaderInstitutionalComponent, FooterInstitutionalComponent],
  standalone: true,
})
export class InstitutionalHomeComponent {
  #dialog = inject(Dialog);
  #destroyRef = inject(DestroyRef)
  #router = inject(Router);

  handleCreateAccount() {
    this.#dialog.open(AuthRegisterComponent);
  }

  handleLogin() {
    this.#dialog.open(AuthLoginComponent).closed
      .pipe(takeUntilDestroyed(this.#destroyRef))
      .subscribe(() => this.#router.navigate(['/dashboard']));
  }
}
