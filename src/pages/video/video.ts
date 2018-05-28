import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import {HomePage} from "../home/home";

/**
 * Generated class for the VideoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-video',
  templateUrl: 'video.html',
})
export class VideoPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,) {
  }
  goToHome() {
    const animationOptions = {
      animation: 'ios-transition',
      duration: 1000
    }
    this.navCtrl.push(HomePage, animationOptions)

  };

  ionViewDidLoad() {
    console.log('ionViewDidLoad VideoPage');

  }
}

