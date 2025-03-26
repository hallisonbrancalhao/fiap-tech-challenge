import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MenuFacade } from '../../../../data-access/src/lib/application/menu.facade';

@Component({
  selector: 'ui-sidebar-dashboard',
  templateUrl: './sidebar-dashboard.component.html',
  standalone: true,
  providers: [MenuFacade],
  imports: [RouterModule],
})
export class SidebarDashboardComponent {
  #menuFacade = inject(MenuFacade);

  menuOptions = this.#menuFacade.menuOptions$;
}
