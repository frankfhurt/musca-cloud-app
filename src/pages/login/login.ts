import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { Auth } from '../../providers/auth/auth';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  loader: any;
  credentials = { login: '', password: '' };

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public auth: Auth,
    public loadingCtrl: LoadingController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  login(): void {
    this.presentLoading();
    this.auth.login(this.credentials).then(logged => {
      if (logged)
        this.navCtrl.setRoot('MenuPage')

      this.loader.dismiss();
    })
  }


  presentLoading() {
    this.loader = this.loadingCtrl.create({
      content: "Efetuando Login..."
    });
    this.loader.present();
  }


}
