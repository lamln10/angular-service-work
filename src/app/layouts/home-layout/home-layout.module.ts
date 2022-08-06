import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeLayoutComponent } from './home-layout.component';
import {HomeLayoutRoutingModule} from './home-layout-routing.module';
import {HomeService} from '../../core/services/home.service';
import {HomeV2Service} from '../../core/services/home-v2.service';
import {MatSliderModule} from '@angular/material/slider';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import {DemoDialogComponent} from '../../dialogs/demo-dialog/demo-dialog.component';



@NgModule({
  declarations: [
    HomeLayoutComponent,
    DemoDialogComponent
  ],
  imports: [
    CommonModule,
    HomeLayoutRoutingModule,
    MatSliderModule,
    MatButtonModule,
    MatDialogModule
  ],
  providers: [
    {
      provide: HomeService,
      useClass: HomeV2Service
    }
  ]
})
export class HomeLayoutModule { }
