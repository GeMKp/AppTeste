import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { IonicStorageModule } from '@ionic/storage';
import { Storage } from '@ionic/storage';



/**
 * Generated class for the CadeduPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cadedu',
  templateUrl: 'cadedu.html',
})
export class CadeduPage {

  name: string;
  senha: string;
  anonasc: number;
  idade:number;
  dados: any = [];
  buttonblock: boolean = true;
  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController, private storage: Storage) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CadeduPage');
  }

  disblock(){
    if (this.name != '' && this.senha.length >= 8 && this.anonasc > 1900) {
      this.buttonblock= false;
    }
  }

  cadastrar(){
    this.idade= 2021 - this.anonasc;
    if (this.name != '' && this.senha.length >= 8 && this.anonasc != 0 && this.idade >= 10) {
      this.dados.push({
        nome: this.name,
        senha: this.senha,
        datanasc: this.anonasc
      });

      this.storage.set('username', this.dados);

      alert("Cadastrado com sucesso!");
      this.name= '';
      this.senha= '';
      this.anonasc= 0;
    } else {
      alert ("É necessario preencher todos os campos");
    }
  }

  voltar(){
    this.navCtrl.pop();
  }


}
