import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { SchedulePage } from '../schedule/schedule';
import { MapsPage } from '../maps/maps';
import { NotificationsPage } from '../notifications/notifications';
import { ProfilePage } from '../profile/profile';

@Component({
  templateUrl: 'tabs.html'
})
export class MainTabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  homeRoot: any = HomePage;
  scheduleRoot: any = SchedulePage;
  mapsRoot: any = MapsPage;
  notificationsRoot: any = NotificationsPage;
  profileRoot: any = ProfilePage;

  constructor() {

  }
}
