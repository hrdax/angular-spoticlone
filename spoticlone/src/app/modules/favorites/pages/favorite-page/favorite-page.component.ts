import { Component, OnInit } from '@angular/core';
import { TrackService } from '@modules/tracks/services/track.service';
import { Observable, of } from 'rxjs'
@Component({
  selector: 'app-favorite-page',
  templateUrl: './favorite-page.component.html',
  styleUrls: ['./favorite-page.component.css']
})
export class FavoritePageComponent implements OnInit{
  listResults$: Observable<any> = of([])
  constructor(private TracksService: TrackService) {}


  recieveData(): void {
    this.listResults$ = this.TracksService.getAllTracks$()
  }

  ngOnInit(): void {
    this.recieveData()
  }
}
