import {Component, OnDestroy, OnInit} from '@angular/core';
import {interval, Subject, takeUntil} from 'rxjs';
import {HomeService} from '../../core/services/home.service';

@Component({
  selector: 'app-demo-dialog',
  templateUrl: './demo-dialog.component.html',
  styleUrls: ['./demo-dialog.component.css']
})
export class DemoDialogComponent implements OnInit , OnDestroy{

  unsubscribe$ = new Subject<void>();

  constructor(
      private homeService: HomeService
  ) { }

  ngOnInit(): void {
    interval(1000).pipe(takeUntil(this.unsubscribe$)).subscribe(timer => console.error('demo dialog timer', timer));
    // need unsubscribe observable in service with provider is root
    this.homeService.count$.subscribe((count) => {
      console.error(`count::: ${count}`);
    });
  }

  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
