import { UserApi } from 'abs/users/user-api';
import { FrameworkConfigService } from '../services/framework-config.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'abs-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {

  constructor(
    private frameworkConfigService: FrameworkConfigService,
    private userApi: UserApi) { 
    console.log(frameworkConfigService);
  }

  ngOnInit() {
  }

  signOut() {
    this.userApi.signOut();
  }
}
