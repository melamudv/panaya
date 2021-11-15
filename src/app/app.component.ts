import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent{
  title = 'panaya';
  navLinks: any[];
  activeLinkIndex = -1;
  constructor() {
    this.navLinks = [
      {
        label: 'Tab First',
        link: './tab1',
        index: 0
      }, {
        label: 'Tab Second',
        link: './tab2',
        index: 1
      }, {
        label: 'Tab Third',
        link: './tab3',
        index: 2
      },
    ];
  }
}
