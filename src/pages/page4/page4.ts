import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams , ViewController} from 'ionic-angular';

/**
 * Generated class for the Page4Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-page4',
  templateUrl: 'page4.html',
})
export class Page4Page {
 nome:string;
  constructor(public navCtrl: NavController, public navParams: NavParams, public ViewCtrl: ViewController ) {
    this.nome = this.navParams.get('nome');
  }

  ionViewDidLoad() {
    //alert(this.navParams.get('nome'));
  }
  back(){
    //this.navCtrl.pop();
    this.ViewCtrl.dismiss();
  }

}
