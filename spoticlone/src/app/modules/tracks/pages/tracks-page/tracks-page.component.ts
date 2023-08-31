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
  TracksPop: Array<TrackModel> = []
  TracksRandom: Array<TrackModel> = []

  listObservers$: Array<Subscription> = []

  constructor(private tracksService: TrackService){

  }

  ngOnInit(): void {
      this.loadRandomData()
      this.loadPopData()
      this.loadMetalData()
  }

  loadAllData(): void {
    
  }

  loadRandomData(): void {
    this.tracksService.getAllRandom$()
      .subscribe((response: TrackModel[]) => {
        this.TracksRandom = response
      })
  }

  loadPopData(): void {
    this.tracksService.getPopTracks$()
      .subscribe((response: TrackModel[]) => {
        this.TracksPop = response
      })
  }

  loadMetalData(): void {
    this.tracksService.getMetalTracks$()
      .subscribe((response: TrackModel[]) => {
        this.TracksMetal = response
      })
  }

  ngOnDestroy(): void {
    
  }

}
