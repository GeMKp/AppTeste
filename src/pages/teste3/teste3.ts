import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';


/**
 * Generated class for the Teste3Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-teste3',
  templateUrl: 'teste3.html',
})
export class Teste3Page {
  texto:string;
  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {
    this.texto = this.navParams.get('data');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Teste3Page');
  }

  back(){
    //this.navCtrl.pop();
    this.viewCtrl.dismiss();
  }

}
