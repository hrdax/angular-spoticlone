import { Injectable } from '@angular/core';
import { TrackModel } from '@core/models/tracks.models';
import { Observable, of } from 'rxjs'
import * as dataRaw from '../../../data/tracks.json'

@Injectable({
  providedIn: 'root'
})
export class TrackService {

  TracksMetal$: Observable<TrackModel[]> = of([])
  TracksRandom$: Observable<TrackModel[]> = of([])


  constructor() { 
    const { data }: any = (dataRaw as any).default
    this.TracksMetal$ = of(data)

    this.TracksRandom$ = new Observable((observer) => {
      const trackExample: TrackModel = {
        _id: 9,
        name: 'll',
        album:'ll',
        url: 'http://',
        cover: 'http://'
      }
      observer.next([trackExample])
    })
  }
}
