import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeLayoutComponent } from './home-layout.component';
import {HomeLayoutRoutingModule} from './home-layout-routing.module';
import {HomeService} from '../../core/services/home.service';
import {HomeV2Service} from '../../core/services/home-v2.service';



@NgModule({
  declarations: [
    HomeLayoutComponent
  ],
  imports: [
    CommonModule,
    HomeLayoutRoutingModule
  ],
  providers: [
    {
      provide: HomeService,
      useClass: HomeV2Service
    }
  ]
})
export class HomeLayoutModule { }
