import { Component, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  constructor(@Inject(DOCUMENT) private document) {
    this.document.getElementsByClassName('lds-facebook')[0].style.display =
      'none';
  }
}
