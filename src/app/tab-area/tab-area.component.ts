import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab-area',
  templateUrl: './tab-area.component.html',
  styleUrls: ['./tab-area.component.scss']
})
export class TabAreaComponent implements OnInit {
  toggleFlag = false;
  constructor() {}

  ngOnInit() {}
  toggleMenu() {
    this.toggleFlag = !this.toggleFlag;
  }
}
