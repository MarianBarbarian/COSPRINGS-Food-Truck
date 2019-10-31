import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  public appPages = [
    {
      title: 'Home',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'Food Trucks',
      url: '/list',
      icon: 'pizza'
    },
    {
      title: 'Contact a vendor',
      url: '/contact',
      icon: 'mail'
    },
    {
      title: 'Leave some love!',
      url: '/reviews',
      icon: 'heart-half'
    },
    {
      title: 'Read some love!',
      url: '/reviews2',
      icon: 'text'
    }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
