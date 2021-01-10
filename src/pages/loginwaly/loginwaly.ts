import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
/**
 * Generated class for the LoginwalyPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-loginwaly',
  templateUrl: 'loginwaly.html',
})
export class LoginwalyPage {

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams, 
    public storage: Storage ){
      new Promise((resolve,reject)=>{
        this.storage.set('waly', 18)
        .then(() => { console.log('deu certo'); return resolve; })
        .catch(erro => console.log('deu erro' + erro));
      }).then(()=> { console.log(this.PegarValor()) })
      .catch(err => console.log(`promisse${err}`));
  }

  ionViewDidLoad() {
    
  }
 
  PegarValor(){
   return this.storage.get('waly');
  }
}
