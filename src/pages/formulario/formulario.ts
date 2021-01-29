import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the FormularioPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-formulario',
  templateUrl: 'formulario.html',
})
export class FormularioPage {
  //Atributos
  nome: string;
  data: string;
  foto: string;
  senha: string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FormularioPage');
  }


  Confirmar(){

    if(this.nome == null){
      alert("Registro Inválido, o campo nome não foi preenchido");

    }else if(this.data == null){

      alert("Registro Inválido, o campo data não foi preenchido");

    }else if(this.foto == null){

      alert("Registro Inválido, o campo foto não foi preenchido");

    }else if(this.senha == null && this.senha < 8 && this.senha <= 15){

      alert("Registro Inválido, o campo senha não foi preenchido");

    }else{

      alert("Registro Ok");
    }
  }

}
