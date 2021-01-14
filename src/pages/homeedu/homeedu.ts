import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController} from 'ionic-angular';
import { Storage } from '@ionic/storage';


/**
 * Generated class for the HomeeduPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-homeedu',
  templateUrl: 'homeedu.html',
})
export class HomeeduPage {

  user: string ;
  datanasc: string;
  senha: string ;
  idade: number ;
  constructor(public navCtrl: NavController, public navParams: NavParams, private storage: Storage, public modalCtrl: ModalController) 
  {
      this.adquirirCookie().then((retorno:string)=>
      {
        this.idade = 2021 - parseInt(retorno);
      });
  }

  adquirirCookie()
  {
    return new Promise((resolve,reject)=>
    {
      this.storage.get('username').then((val:any) => 
      {
        if(val)
        {
          val.forEach((dados:any) => 
          {
            console.log(dados);
            this.user = dados.nome;
            this.senha = dados.senha;
            this.datanasc = dados.datanasc;
          });
          resolve(this.datanasc);
        } 
      });
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomeeduPage');
  }

  altera(){
    const modal = this.modalCtrl.create('UsueduPage');
    modal.present();
  }

}
