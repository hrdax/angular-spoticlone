import { Component, OnInit, OnDestroy } from '@angular/core';
import * as dataRaw from '../../../../data/tracks.json'
import { TrackModel } from '@core/models/tracks.models';
import { TrackService } from '@modules/tracks/services/track.service';
import { Subscription } from 'rxjs'

@Component({
  selector: 'app-tracks-page',
  templateUrl: './tracks-page.component.html',
  styleUrls: ['./tracks-page.component.css']
})
export class TracksPageComponent implements OnInit, OnDestroy{
  TracksMetal: Array<TrackModel> = []
  TracksRandom: Array<TrackModel> = []

  listObservers$: Array<Subscription> = []

  constructor(private tracksService: TrackService){

  }

  ngOnInit(): void {
    const observer1$ = this.tracksService.TracksMetal$
    .subscribe(response => {
      this.TracksMetal = response
      this.TracksRandom = response
      console.log(response)
    })

    const observer2$ = this.tracksService.TracksRandom$
    .subscribe(response => {
      this.TracksRandom = [...this.TracksRandom, ...response]
      console.log('cancion random',response)
    })
    this.listObservers$ = [observer1$, observer2$]
  }

  ngOnDestroy(): void {
    this.listObservers$.forEach(u => u.unsubscribe())
  }

}
