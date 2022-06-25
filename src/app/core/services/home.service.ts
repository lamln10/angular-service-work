import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable, of, Subject} from "rxjs";
import {HomeV2Service} from "./home-v2.service";

@Injectable({
  providedIn: "root"
})

export class HomeService {

  count$ = new BehaviorSubject<number>(1);
  constructor(
  ) {
    console.error(`constructor HomeService`)
  }

  getTitle(): Observable<string> {
    return of ('Home layout working!');
  }
}
