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
  id: number;
  idade: number;
  dados: any = [];
  img: string;
  constructor(public navCtrl: NavController, public navParams: NavParams, private storage: Storage) {
    this.id = this.navParams.get('id');
    this.storage.get('username').then((value:any)=>
    {
      this.name = value[this.id].nome;
      this.senha = value[this.id].senha;
      this.img = value[this.id].imagem;
      this.anonasc = value[this.id].datanasc;
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UsueduPage');
  }

  alt(){
    this.idade= 2021 - this.anonasc;
    if (this.name != '' && this.senha.length >= 8 && this.anonasc != 0 && this.idade >= 10) {

      this.storage.get('username').then((val:any)=>
      {
        for (let i=0; i < val.length; i++){
          if (val[i].nome == this.name && val[i].senha == this.senha) {
            alert("usuario já existente.");
            return false;
          } 

        }
                 
        val[this.id].nome = this.name;
        val[this.id].senha = this.senha;
        val[this.id].datanasc = this.anonasc;
        val[this.id].imagem = this.img;

        this.storage.set('username', val).then;

        alert("Dados alterados com sucesso.");
      
      })
    } else {
      alert("É necessario preencher todos os campos");
    }
  }

  voltar(){
    this.navCtrl.push('HomeeduPage');
  }

}
