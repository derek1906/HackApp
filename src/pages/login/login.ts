import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { MainTabsPage } from "../tabs/tabs"

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  constructor(public navCtrl: NavController) {

  }

  doLogin() {
	// TODO: Authentication
	this.navCtrl.setRoot(MainTabsPage);
  }

}
