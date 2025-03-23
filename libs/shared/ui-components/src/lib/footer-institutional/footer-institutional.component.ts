import { Component } from '@angular/core';

@Component({
  selector: 'ui-footer-institutional',
  template: `
    <footer class="bg-black text-white py-4 flex item-center justify-around">
      <section class="flex items-start flex-col gap-4">
        <h3 class="font-bold">Serviços</h3>
        <a href="#">Conta corrente</a>
        <a href="#">Conta PJ</a>
        <a href="#">Cartão de crédito</a>
      </section>
      <section class="flex items-start flex-col gap-4">
        <h3 class="font-bold">Contato</h3>
        <p>0800 004 250 08</p>
        <p>meajuda&#64;bytebank.com.br</p>
        <p>ouvidoria&#64;bytebank.com.br</p>
      </section>
      <section class="flex items-center">
        <img src="assets/white-logo.svg" alt="Logo" class="w-auto h-8">
      </section>
    </footer>
  `,
  styles: `
  `
})
export class FooterInstitutionalComponent {}
