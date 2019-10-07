import { Component, OnInit, Input } from '@angular/core';
import { LPDetail } from '../models';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  @Input() items: LPDetail[] = []

  canShare = false;

  constructor() { }

  ngOnInit() {
    this.canShare = !!navigator['share'];
  }

  share(idx: number) {
    const lp = this.items[idx];
    const details = {
      title: `${lp.title} by ${lp.artist}`,
      text: 'This is one of my favourtie album',
      url: lp.image || 'https://icon-library.net/images/image-placeholder-icon/image-placeholder-icon-7.jpg'
    };

    navigator['share'](details)
      .then(() => { /* added */ })
      .catch((error) => alert(JSON.stringify(error)));
  }
}
