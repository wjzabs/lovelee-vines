import { MenuService } from './../services/menu-service';
import { ScreenService } from './../services/screen.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'abs-title-bar',
  templateUrl: './title-bar.component.html',
  styleUrls: ['./title-bar.component.css']
})
export class TitleBarComponent implements OnInit {

  constructor(
    private screenService: ScreenService,
    private menuService: MenuService) { }

  ngOnInit() {
  }

}
