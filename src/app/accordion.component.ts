import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-accordion',
  template: `
    <div>
      <h3 (click)="toggleVisibility()">{{ title }}</h3>
      <div *ngIf="visible">
        <ng-content></ng-content>
      </div>
    </div>
  `
})
export class AccordionComponent {
  @Output() open = new EventEmitter<void>();
  @Output() close = new EventEmitter<void>();
  visible = false;
  title = 'Accordion Title';

  toggleVisibility() {
    this.visible = !this.visible;
    if (this.visible) {
      this.open.emit();
    } else {
      this.close.emit();
    }
  }
}
