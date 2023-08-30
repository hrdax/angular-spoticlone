import { Component } from '@angular/core';
import { TrackModel } from '@core/models/tracks.models';

@Component({
  selector: 'app-media-player',
  templateUrl: './media-player.component.html',
  styleUrls: ['./media-player.component.css']
})
export class MediaPlayerComponent {
  mockCover: any = {
    cover: 'https://upload.wikimedia.org/wikipedia/en/e/e3/Dream_Theater_-_Systematic_Chaos.jpg',
    album: 'Dream Theater',
    name: 'Forsaken',
    // url: '',
    // _id: 1
  }
}
