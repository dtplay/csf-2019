import { Component } from '@angular/core';
import { SKU, LineItem } from './models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  cart: LineItem[] = [

  ]

  addItem($event: SKU) {
    const i = this.cart.find((v) => v.sku.itemId == $event.itemId)
    if (i) {
      i.quantity++;
    } else {
      const newILineItem = {
        sku: $event,
        quantity: 1
      }
      this.cart.push(newILineItem);
    }
    // for (let i of this.cart)
    //   if (i.sku.itemId == $event.itemId) {

    //   }
  }
}
