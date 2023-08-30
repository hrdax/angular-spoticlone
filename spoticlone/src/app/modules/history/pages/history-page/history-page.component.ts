import { Component } from '@angular/core';
import { TrackModel } from '@core/models/tracks.models';
import { SearchService } from '@modules/history/services/search.service';
import { Observable, of } from 'rxjs'
@Component({
  selector: 'app-history-page',
  templateUrl: './history-page.component.html',
  styleUrls: ['./history-page.component.css']
})
export class HistoryPageComponent {
  listResults$: Observable<any> = of([])
  constructor(private searchService: SearchService) {}


  recieveData(event: string): void {
    this.listResults$ = this.searchService.searchTracks$(event)
  }


}
