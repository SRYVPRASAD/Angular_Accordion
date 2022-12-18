import { Component, EventEmitter, Output, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;
  onOpen() {
    console.log('The accordion was opened');
  }

  onClose() {
    console.log('The accordion was closed');
  }
}
