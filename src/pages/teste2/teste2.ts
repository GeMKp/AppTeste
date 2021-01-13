import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ModalController } from 'ionic-angular';
import { Storage } from '@ionic/storage';



/**
 * Generated class for the Teste2Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-teste2',
  templateUrl: 'teste2.html',
})
export class Teste2Page {

  name:string;
  check:string = "true";
  senha: string;
  ano:number;
  idade: number;
  checkbutt: boolean = true;
  keyname: string = 'username';
  dados: any = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController,
              private storage: Storage) {
    // this.teste();
  }

  // ionViewDidLoad() {
  //   // console.log('ionViewDidLoad Teste2Page');
  //   alert('ola');
  // }

  mud(){
    if (2021 - this.ano >= 18 && this.ano > 1900 && this.name != '') {
      this.checkbutt= false;
    } 
  }

  register(){

      this.dados.push({
        nome: this.name,
        senha: this.senha
      });

      this.storage.set(this.keyname, this.dados);

      if (2021 - this.ano >= 18 && this.ano > 1900 && this.name != '' && this.senha.length > 8 ) {
        this.idade= 2021- this.ano;
        alert("Seu registro foi um sucesso!");
        this.name = "";
        this.senha = "";
        if (this.check == "true") {
          alert("Opção desabilitada!");
        }
        else{
          // this.navCtrl.push('Teste3Page', {data: this.name ,idade: 2021-this.ano}); 
        }
      } 
      else {
          alert('Idade suficiente, ou nome invalido, ou senha curta.')
      }
  } 
    // const modal = this.modalCtrl.create('Teste3Page', {data: this.name});
    // modal.present();  

  login(){
    this.storage.get(this.keyname).then((val:any) => {
      if (2021 - this.ano >= 18 && this.ano > 1900 && this.name != '' && this.senha.length > 8 && this.dados.senha != '') {
        if (val[0].nome == this.name && val[0].senha == this.senha) {
          this.navCtrl.push('Teste3Page', {user: this.name ,id: this.idade});
        } else {
          alert("login invalido.");
        }
      } else {
        alert("É necessario se registrar.");
      }
    });
  }
}