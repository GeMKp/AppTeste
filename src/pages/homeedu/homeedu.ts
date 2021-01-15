import { Component } from '@angular/core';
import { Alert, IonicPage, NavController, NavParams, ModalController} from 'ionic-angular';
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
  img: string;
  dados: any = [];
  id: number;
  constructor(public navCtrl: NavController, public navParams: NavParams, private storage: Storage, public modalCtrl: ModalController) 
  {
      // this.adquirirCookie().then((retorno:string)=>
      // {
      //   this.idade = 2021 - parseInt(retorno);
      // });

      this.storage.get('username').then((val:any)=>
      {
        this.dados = val;
      });
      
  }

  // adquirirCookie()
  // {
  //   return new Promise((resolve,reject)=>
  //   {
  //     this.storage.get('username').then((val:any) => 
  //     {
  //       if(val)
  //       {
          
  //           console.log(val);
  //           this.user = val[this.id].nome;
  //           this.senha = val[this.id].senha;
  //           this.datanasc = val[this.id].datanasc;
  //           this.img = val[this.id].imagem;
          
  //         resolve(this.datanasc);
  //       } 
  //     });
  //   });
  // }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomeeduPage');
  }
  editar(i:number)
  {
    const modal = this.modalCtrl.create('UsueduPage', {id: i})
    modal.present();
  }
  altera(){
    const modal = this.modalCtrl.create('UsueduPage');
    modal.present();
  }

}
