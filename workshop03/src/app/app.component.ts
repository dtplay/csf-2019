import { Component, OnInit } from '@angular/core';
import { RSVP } from './models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  shareable = false;
  addToList($event: RSVP) {
    console.info('RSVP list: ', $event);
  }

  ngOnInit() {
    this.shareable = !! navigator['share'];
  }

  shareTheJoy() {
    navigator['share']({
      title: 'Class Reunion',
      text: 'Angular rocks not!',
      url: 'https://developers.google.com/web',
  })
    .then(() => console.log('Successful share'))
    .catch((error) => console.log('Error sharing', error));
  }
}
