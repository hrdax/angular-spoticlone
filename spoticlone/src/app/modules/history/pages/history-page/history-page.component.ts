import { Component } from '@angular/core';
import { TrackModel } from '@core/models/tracks.models';
import { SearchService } from '@modules/history/services/search.service';

@Component({
  selector: 'app-history-page',
  templateUrl: './history-page.component.html',
  styleUrls: ['./history-page.component.css']
})
export class HistoryPageComponent {
  listResults: TrackModel[] = []
  constructor(private searchService: SearchService) {}


  recieveData(event: string): void {
    this.searchService.searchTracks$(event)
      .subscribe(({ data }) => {
        this.listResults = data 
      })
  }


}
