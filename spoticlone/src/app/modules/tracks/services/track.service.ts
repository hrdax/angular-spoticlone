import { Injectable } from '@angular/core';
import { TrackModel } from '@core/models/tracks.models';
import { Observable, of } from 'rxjs'
import * as dataRaw from '../../../data/tracks.json'

@Injectable({
  providedIn: 'root'
})
export class TrackService {

  TracksMetal$: Observable<TrackModel[]> = of([])

  constructor() { 
    const { data }: any = (dataRaw as any).default
    this.TracksMetal$ = of(data)
  }
}
