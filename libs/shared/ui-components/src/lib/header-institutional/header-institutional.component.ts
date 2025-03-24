import { Component, output } from '@angular/core';

@Component({
  selector: 'ui-header-institutional',
  templateUrl: './header-institutional.component.html',
  styleUrls: ['./header-institutional.component.scss'],
  standalone: true
})
export class HeaderInstitutionalComponent {
  createAccount = output<boolean>()
  login = output<boolean>()

  handleCreateAccount() {
    this.createAccount.emit(true)
  }

  handleLogin() {
    this.login.emit(true)
  }
}
