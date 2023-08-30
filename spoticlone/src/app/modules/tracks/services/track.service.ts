import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs'
import { environment } from 'src/environments/environment';
import { map, mergeMap, catchError } from 'rxjs/operators'
import { TrackModel } from '@core/models/tracks.models';

@Injectable({
  providedIn: 'root'
})
export class TrackService {

  private readonly URL = environment.api


  constructor(private httpClient:HttpClient) { 
    
  }

  private skipById(listTracks:TrackModel[], id: number): Promise<TrackModel[]> {
    return new Promise((resolve, reject) => {
      const listTmp = listTracks.filter(a => a._id != id)
      resolve(listTmp)
    })
  }

  getAllTracks$(): Observable<any> {
      return this.httpClient.get(`${this.URL}/tracks`)
        .pipe(
          map(({data}: any) => {
            return data
          }),
          catchError((err) => {
            console.log('Error --->', err)
            return of([])
          })
        )
  }

  getAllRandom$(): Observable<any> {
    return this.httpClient.get(`${this.URL}/tracks`)
      .pipe(
        map(({data}: any) => {
          return data
        })
        // mergeMap(({data}: any) => this.skipById(data, 1)),
        // map(({data}: any) => {
        //   return data.reverse()
        // }),
        // map((dataReverted: any) => { // probando filtro id
        //   return dataReverted.filter((track: TrackModel) => track._id != 7)
        // })
      )
}
}
