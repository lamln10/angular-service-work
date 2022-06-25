import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class HomeService {

  count$ = new BehaviorSubject<number>(1);
  constructor(
  ) {
    console.error('constructor HomeService');
  }

  getTitle(): Observable<string> {
    return of ('Home layout working!');
  }
}
