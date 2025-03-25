import { Component, input, output } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
  selector: 'ui-modal',
  templateUrl: './ui-modal.component.html',
  standalone: true,
  imports: [NgClass],
})
export class UiModalComponent {
  classNameExt = input<string>('');
  onCloseModal = output<void>();

  closeModal() {
    this.onCloseModal.emit();
  }
}
