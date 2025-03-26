import { Injectable, signal } from '@angular/core';
import { MenuOptions } from '@fiap-tech-challenge/shared-domain';

@Injectable()
export class MenuFacade {
  #menuOptions = signal<MenuOptions[]>([
    { label: 'Início', path: '/', icon: 'account_balance' },
    { label: 'Transações', path: 'home', icon: 'currency_exchange' },
    { label: 'Serviços', path: 'services', icon: 'editor_choice' },
    { label: 'Investimentos', path: 'investments', icon: 'analytics' },
    { label: 'Meus cartões', path: 'my-cards', icon: 'credit_card' },
  ]);
  menuOptions$ = this.#menuOptions.asReadonly()
}
