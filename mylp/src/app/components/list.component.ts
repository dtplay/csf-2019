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
    }
    if (!!lp.image)
      details['url'] = lp.image;
    navigator['share'](details);
  }
}
