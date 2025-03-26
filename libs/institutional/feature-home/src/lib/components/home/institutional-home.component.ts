import { Component, DestroyRef, inject, OnInit } from '@angular/core';
import { FooterInstitutionalComponent, HeaderInstitutionalComponent } from '@fiap-tech-challenge/ui-components';
import { Dialog } from '@angular/cdk/dialog';
import { AuthLoginComponent, AuthRegisterComponent } from '@fiap-tech-challenge/feature-auth';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Router } from '@angular/router';
import { AuthFacade } from '@fiap-tech-challenge/shared-data-access';

@Component({
  selector: 'app-institutional-home',
  templateUrl: './institutional-home.component.html',
  styleUrls: ['./institutional-home.component.scss'],
  imports: [HeaderInstitutionalComponent, FooterInstitutionalComponent],
  standalone: true,
})
export class InstitutionalHomeComponent implements OnInit {
  #authFacade = inject(AuthFacade);
  #dialog = inject(Dialog);
  #destroyRef = inject(DestroyRef);
  #router = inject(Router);

  user$ = this.#authFacade.userName$;

  ngOnInit() {
    this.#authFacade.getUser().pipe(takeUntilDestroyed(this.#destroyRef)).subscribe()
  }

  handleCreateAccount() {
    this.#dialog.open(AuthRegisterComponent);
  }

  handleLogin() {
    this.#dialog
      .open(AuthLoginComponent)
      .closed.pipe(takeUntilDestroyed(this.#destroyRef))
      .subscribe(() => this.#router.navigate(['/dashboard']));
  }

  handleLogout() {
    this.#authFacade.logout();
  }
}
