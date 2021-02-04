import { VisualizarPage } from './../visualizar/visualizar';
import { Storage } from '@ionic/storage';
import { Component } from '@angular/core';
import { IonicPage, ModalController, NavController, NavParams } from 'ionic-angular';
import { FormmodalPage } from '../formmodal/formmodal';



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
  novoCookie;
  formulario = [];
  //Atributos
  nome: string;
  data: number;
  foto: string;
  senha: string;

  constructor(
    /*public navCtrl: NavController,*/
    public navCtrl: NavController,
    public navParams: NavParams,
    private storage: Storage,
    public modalCtrl: ModalController
    )
    {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad FormularioPage');
  }



  Confirmar(){
    if((this.nome == null) || (this.senha == null) || (this.data == null) || (this.foto == null)){
      alert("Registro Inválido, Campos não foram preenchidos");
    }
    else if(this.data <= 4){
      alert("Erro de registro, o campo Data só pode compor 4 caracteres no total");
    }
    else{

        alert("Registro Ok");
        this.formulario.push({
          Nome: this.nome,
          Senha: this.senha,
          Data: this.data,
          Foto: this.foto
        });

        this.storage.get('Nome').then((dados) => {
          if(dados != null){
            this.novoCookie = dados;
            let total = this.novoCookie.concat(this.formulario);
            this.storage.set('Nome', total);
            console.log(total);
          }
          this.openpage();
        });

    }

  }
  openpage(){
    this.navCtrl.push('VisualizarPage');
  }
}
