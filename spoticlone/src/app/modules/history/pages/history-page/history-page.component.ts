import { Component } from '@angular/core';
import { SearchService } from '@modules/history/services/search.service';

@Component({
  selector: 'app-history-page',
  templateUrl: './history-page.component.html',
  styleUrls: ['./history-page.component.css']
})
export class HistoryPageComponent {
  
  constructor(private searchService: SearchService) {}


  recieveData(event: string): void {
    this.searchService.searchTracks$(event)
      .subscribe(res => {
        
      })
  }


}
