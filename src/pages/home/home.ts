import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

@Component({
	selector: 'page-home',
	templateUrl: 'home.html'
})
export class HomePage {

	countdownMessagePrefix: string = "Hacking Ends in...";
	countdownTimeRemaining: number = 1000;

	statusMessage: string = "Happening Now";

	constructor(public navCtrl: NavController) { }

	openProfilePage(){
		this.navCtrl.parent.select(4);
	}

}
