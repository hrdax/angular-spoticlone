import { Component, OnInit, OnDestroy } from '@angular/core';
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
    this.tracksService.getAllTracks$()
      .subscribe(response => {
        console.log('aaa', response)
      })
  }

  ngOnDestroy(): void {
    
  }

}
