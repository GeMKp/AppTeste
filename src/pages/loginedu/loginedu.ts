import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';


/**
 * Generated class for the LogineduPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-loginedu',
  templateUrl: 'loginedu.html',
})
export class LogineduPage {
  name: string;
  senha: string;
  constructor(public navCtrl: NavController, public navParams: NavParams, private storage: Storage) {
    this.entrar();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LogineduPage');
  }

  entrar(){
    this.storage.get('username').then((val:any) => {
      console.log(val);
      for (let i=0; i < val.length; i++){
        if (val[i].nome == this.name && val[i].senha == this.senha) {
          this.navCtrl.push('HomeeduPage', {id: i});
        }
      }
    })
  }

  register(){
    this.navCtrl.push('CadeduPage')
  }
}
