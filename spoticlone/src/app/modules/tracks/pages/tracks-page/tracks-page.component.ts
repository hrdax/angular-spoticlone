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
      this.loadAllData()
      this.loadRandomData()
  }

  loadAllData(): void {
    this.tracksService.getAllTracks$()
      .subscribe((response: TrackModel[]) => {
        this.TracksMetal = response
      })
  }

  loadRandomData(): void {
    this.tracksService.getAllRandom$()
      .subscribe((response: TrackModel[]) => {
        this.TracksRandom = response
      })
  }

  ngOnDestroy(): void {
    
  }

}
