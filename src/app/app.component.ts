import {Component, OnInit} from '@angular/core';
import {SwUpdate} from "@angular/service-worker";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'angular-pwa-app';
  constructor(
    private swUpdate: SwUpdate,
    private toastrService: ToastrService
  ) {
  }
  ngOnInit() {
    console.error(`swUpdate::::`, this.swUpdate.isEnabled)
    if (this.swUpdate.isEnabled) {
      this.swUpdate.versionUpdates.subscribe((res) => {
        console.log(`updatesAvailable::::::`, res)
        if (res?.type === 'VERSION_READY') {
          this.toastrService.warning('Có phiên bản mới.Tải lại trang sau 5s','', {
            timeOut: 10000
          })
          setTimeout(() => {
            window.location.reload();
          }, 2000)
        }
      })
    }

    setInterval(() => {
      console.error('time interval')
      this.swUpdate.checkForUpdate().then(() => console.log('checking for updates'));
    }, 5000)
  }
}
