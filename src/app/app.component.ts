import {Component, OnInit} from '@angular/core';
import {SwUpdate} from "@angular/service-worker";
import {ToastrService} from "ngx-toastr";
import {HomeService} from "./core/services/home.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'angular-pwa-app';
  count: number;
  constructor(
    private swUpdate: SwUpdate,
    private toastrService: ToastrService,
    private homeService: HomeService
  ) {
  }

  ngOnInit() {
    this.homeService.count$.subscribe(res => {
      this.count = res;
    })
    if (this.swUpdate.isEnabled) {
      this.swUpdate.versionUpdates.subscribe((res) => {
        if (res?.type === 'VERSION_READY') {
          this.toastrService.warning('Có phiên bản mới.Tải lại trang sau 5s','', {
            timeOut: 10000
          })
          setTimeout(() => {
            window.location.reload();
          }, 2000)
        }
      })
      setInterval(() => {
        this.swUpdate.checkForUpdate().then(() => console.log('checking for updates'));
      }, 5000)
    }
  }

  onIncrementCount(): void {
    const valueIncrement = 5;
    this.homeService.count$.next(this.count + valueIncrement);
  }
}
