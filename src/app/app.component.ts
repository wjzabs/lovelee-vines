import { MenuService } from './../abs/services/menu-service';
import { FrameworkConfigSettings } from './../abs/services/framework-config.service';
import { Component } from '@angular/core';
import { FrameworkConfigService } from '../abs/services/framework-config.service';
import {initialMenuItems }  from './app.menu';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor (
    private frameworkConfigService: FrameworkConfigService,
    private menuService: MenuService) {

    let config:FrameworkConfigSettings = {
      socialIcons: [
        { imageFile: 'assets/facebook.png', alt: 'Facebook', link: 'http://www.facebook.com'},
        { imageFile: 'assets/googleplus.png', alt: 'Google +', link: 'http://www.googleplus.com'},
        { imageFile: 'assets/instagram.png', alt: 'Instagram', link: 'http://www.instagram.com'},
        { imageFile: 'assets/linkedin.png', alt: 'Linked-In', link: 'http://www.linkedin.com'},
        { imageFile: 'assets/twitter.png', alt: 'Twitter', link: 'http://www.twitter.com'},
        { imageFile: 'assets/youtube.png', alt: 'You-Tube', link: 'http://www.youtube.com'}
      ],
      showLanguageSelector: true,
      showUserControls: true,
      showStatusBar: true,
      showStatusBarBreakpoint: 800
    };

    frameworkConfigService.configure(config);
    menuService.items = initialMenuItems;
  }
}
