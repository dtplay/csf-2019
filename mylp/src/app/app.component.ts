import { Component } from '@angular/core';
import { LPDetail } from './models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  lpCollection: LPDetail[] = [];

  onNewLp($event: LPDetail) {
    this.lpCollection.push($event);
    this.lpCollection = this.lpCollection
      .sort(v => {
        const currName = v.artist.toLowerCase();
        const newName = $event.artist.toLowerCase();
        if (currName == newName) {
            if (v.title.toLowerCase() > $event.title.toLowerCase())
                return (-1);
            return (1);
        }
        if (currName > newName)
          return -1;
        return (1);
      });
      console.info('>> lpCollection: ', this.lpCollection)
  }

}
