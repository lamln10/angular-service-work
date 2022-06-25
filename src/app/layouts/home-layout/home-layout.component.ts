import { Component, OnInit } from '@angular/core';
import {HomeService} from "../../core/services/home.service";

@Component({
  selector: 'app-home-layout',
  templateUrl: './home-layout.component.html',
  styleUrls: ['./home-layout.component.css'],
})
export class HomeLayoutComponent implements OnInit {
  count: number;
  title: string;
  constructor(
    private homeService: HomeService
  ) { }

  ngOnInit(): void {
    console.error('ngOnInit HomeLayoutComponent');
    this.homeService.count$.subscribe(count => this.count = count);
    this.getTitle();
  }

  getTitle(): void {
    this.homeService.getTitle().subscribe(res => this.title = res);
  }
}
