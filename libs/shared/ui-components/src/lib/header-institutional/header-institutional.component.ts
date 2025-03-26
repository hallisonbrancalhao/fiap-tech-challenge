import { Component, input, output } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'ui-header-institutional',
  templateUrl: './header-institutional.component.html',
  styleUrls: ['./header-institutional.component.scss'],
  imports: [RouterLink],
  standalone: true,
})
export class HeaderInstitutionalComponent {
  user = input<string | null>(null);
  createAccount = output<void>();
  login = output<void>();
  logout = output<void>();

  handleCreateAccount() {
    this.createAccount.emit();
  }

  handleLogin() {
    this.login.emit();
  }

  handleLogout() {
    this.logout.emit();
  }
}
