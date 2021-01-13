import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';

/**
 * Generated class for the UsueduPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-usuedu',
  templateUrl: 'usuedu.html',
})
export class UsueduPage {
  name: string;
  senha: string;
  anonasc: number;
  idade: number;
  dados: any = [];
  img: string;
  constructor(public navCtrl: NavController, public navParams: NavParams, private storage: Storage) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UsueduPage');
  }

  alt(){
    this.idade= 2021 - this.anonasc;
    if (this.name != '' && this.senha.length >= 8 && this.anonasc != 0 && this.idade >= 10) {
      this.dados.push({
        nome: this.name,
        senha: this.senha,
        datanasc: this.anonasc,
        imagem: this.img
      })
      this.storage.set('username', this.dados);
  
      alert("Dados alterados com sucesso.");

    } else {
      alert("É necessario preencher todos os campos");
    }
  }

  voltar(){
    this.navCtrl.push('HomeeduPage');
  }

}
