import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  dices = [ 1, 5, 3, 6 ];

  constructor() {
    console.info('>> in constructor');
    // setInterval(
    //   () => {
    //     const v = Math.floor(Math.random() * 6) + 1;
    //     this.dices[0] = v;
    //     console.info('v = ', v);
    //   },
    //   1000 // every second
    // );
  }

  clicked(eventObject) {
    for (let i = 0; i < this.dices.length; i++)
      this.rollDice(i)
    console.info('click eventObject: ', eventObject);
  }

  rollDice(d: number) {
    const v = Math.floor(Math.random() * 6) + 1;
    this.dices[d] = v;
  }
}
