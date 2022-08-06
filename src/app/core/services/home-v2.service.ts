import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root',
})

export class HomeV2Service {
  count$ = new BehaviorSubject<number>(110);
  constructor(
  ) {
    console.error('constructor HomeService v2');
  }

  getTitle(): Observable<string> {
    return of ('Home V2 layout working!');
  }
}
