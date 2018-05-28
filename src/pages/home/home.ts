import {Component, ViewChild} from '@angular/core';
import {Nav, NavController, NavParams} from 'ionic-angular';
import {GamePage} from "../game/game";
import {VideoPage} from "../video/video";
import {AboutPage} from "../about/about";



@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  @ViewChild(Nav) nav: Nav;

  params: Object;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  goToGame() {
    const animationOptions = {
      animation: 'ios-transition',
      duration: 1000
    }
    this.navCtrl.push(GamePage, animationOptions)

  };

  goToVideo() {
    const animationOptions = {
      animation: 'ios-transition',
      duration: 1000
    }
    this.navCtrl.push(VideoPage, animationOptions)

  };

  goToAbout() {
    const animationOptions = {
      animation: 'ios-transition',
      duration: 1000
    }
    this.navCtrl.push(AboutPage, animationOptions)

  };




//   this.navCtrl.push{GamePage, params {}, animationOptions }
// }


}
