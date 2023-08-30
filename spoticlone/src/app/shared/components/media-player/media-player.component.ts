import { Component, OnInit, OnDestroy } from '@angular/core';
import { TrackModel } from '@core/models/tracks.models';
import { MultimediaService } from '@shared/services/multimedia.service';
import { Subscription } from 'rxjs'

@Component({
  selector: 'app-media-player',
  templateUrl: './media-player.component.html',
  styleUrls: ['./media-player.component.css']
})
export class MediaPlayerComponent implements OnInit, OnDestroy{
  mockCover: TrackModel = {
    cover: 'https://upload.wikimedia.org/wikipedia/en/e/e3/Dream_Theater_-_Systematic_Chaos.jpg',
    album: 'Dream Theater',
    name: 'Forsaken',
    url: 'http://locahost/track.mp3',
    _id: 1
  }

  constructor(private multimediaService: MultimediaService) {

  }

  listObservers$: Array<Subscription> = []

  ngOnInit(): void {
    const observer1$: Subscription = this.multimediaService.callback.subscribe(
      (response: TrackModel) => {
        
      }
    )

    this.listObservers$ = [observer1$]
  }

  ngOnDestroy(): void {
    this.listObservers$.forEach(u => u.unsubscribe())
  }
}
