import { Component, OnInit } from '@angular/core';

import { SKU, INVENTORY } from '../models';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent implements OnInit {

  readonly inventory = INVENTORY;

  constructor() { }

  ngOnInit() { }

  selectItem(itemId, idx) {
    console.info('item selected ', itemId, idx);
  }

}
