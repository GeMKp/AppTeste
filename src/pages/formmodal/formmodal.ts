import { Storage } from '@ionic/storage';
import { Component } from '@angular/core';
import { IonicPage, ModalController, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the FormmodalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-formmodal',
  templateUrl: 'formmodal.html',
})
export class FormmodalPage{
  nomeEdit;
  senhaEdit;
  fotoEdit;
  dataEdit;
  i: number;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private storage: Storage,
    public modalCtrl: ModalController) {
     console.log( this.navParams.get("contador"));
     this.i = this.navParams.get("contador");
    this.storage.get('Nome').then((retorno) =>{
      //let i:number = this.navParams.get("contador");
      this.nomeEdit = retorno[this.i].Nome;
      this.senhaEdit = retorno[this.i].Senha;
      this.fotoEdit = retorno[this.i].Foto;
      this.dataEdit = retorno[this.i].Data;


    });
  }
    ionViewDidLoad() {
      console.log('ionViewDidLoad FormmodalPage');
    }
    Editar(){
      this.storage.get('Nome').then((retorno) => {
        let i:number = this.navParams.get("contador");
        retorno[i].Nome = this.nomeEdit;
        retorno[i].Senha = this.senhaEdit;
        retorno[i].Foto = this.fotoEdit;
        retorno[i].Data = this.dataEdit;

        this.storage.set('Nome', retorno);

        alert("Registro Salvo, volte para a página anterior e a atualize para visualizar alterações");

      });
    }

  }
  /*chamada(contador){
    this.storage.get('Nome').then((retorno)=>{
      let nomeEdit = retorno[contador].nome;
      let senhaEdit = retorno[contador].senha;

      console.log("Nome: "+nomeEdit+" e Senha: "+senhaEdit);
    });
  }
  */

/*
  chamando(){
    this.i = this.navParams.get("contador");
    this.storage.get('Nome').then((retorno) =>{
      //let i:number = this.navParams.get("contador");
      this.nomeEdit = retorno[this.i].Nome;
      this.senhaEdit = retorno[this.i].Senha;


    });
*/
