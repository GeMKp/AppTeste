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
  img: string;
  dados: any = [];
  buttonblock: boolean = true;
  constructor(public navCtrl: NavController, 
    public navParams: NavParams, public viewCtrl: ViewController, 
    private storage: Storage) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CadeduPage');
  }

  disblock(){
    if (this.name != '' && this.senha.length >= 8 && this.anonasc > 1900 && this.img != '') {
      this.buttonblock= false;
    }
  }

  cadastrar(){

    this.idade= 2021 - this.anonasc;
    if (this.name != '' && this.senha.length >= 8 && this.anonasc != 0 && this.idade >= 10 && this.img != '') {
     
      let obj = [
       {
        nome: this.name,
        senha: this.senha,
        datanasc: this.anonasc,
        imagem: this.img
      } 
      ]

      this.dados.push(obj);
    
     alert("Cadastrado com sucesso!");
     console.log(this.dados);
      this.name= '';
      this.senha= '';
      this.img= '';
      this.anonasc= 0;
    } else {
      alert ("É necessario preencher todos os campos");
    }

  }

  voltar(){
    this.storage.set('username', this.dados);

    this.navCtrl.pop();
  }

}
