import {Component, OnInit} from '@angular/core';
import {SwUpdate} from '@angular/service-worker';
import {ToastrService} from 'ngx-toastr';
import {HomeService} from './core/services/home.service';
import {NftService} from './nft.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'angular-service-work';
  count: number;
  constructor(
    private swUpdate: SwUpdate,
    private toastrService: ToastrService,
    private homeService: HomeService,
    private nftService: NftService
  ) {
  }

  ngOnInit() {
    console.log('app.component init');
    this.homeService.count$.subscribe(res => {
      this.count = res;
    });
    if (this.swUpdate.isEnabled) {
      this.swUpdate.versionUpdates.subscribe((res) => {
        if (res?.type === 'VERSION_READY') {
          this.toastrService.warning('Có phiên bản mới.Tải lại trang sau 5s','', {
            timeOut: 10000
          });
          setTimeout(() => {
            window.location.reload();
          }, 2000);
        }
      });
      setInterval(() => {
        this.swUpdate.checkForUpdate().then(() => console.log('checking for updates'));
      }, 5000);
    }

    const body = {
      'walletAddress': '0xecddcad4b9d2926d8404c46e415210b89f76bdb3',
      'message': '0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef3eddf1dxqsdf',
      'signature': '0xc0f9c72d4d63f250f35db31eaf0d5a2570248e96d8ac129e05b99ff9a67e46aa3c012b08fa624af0b493a7ab417518220b1d471e15b949572aa356b80eb78eb11b',
      'networkId': 97
    };
    this.nftService.verifySignature(body).subscribe(res => {
      console.log(res);
    });
  }

  onIncrementCount(): void {
    const valueIncrement = 5;
    this.homeService.count$.next(this.count + valueIncrement);
  }
}
