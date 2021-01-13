import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
/**
 * Generated class for the EditarwalysonPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-editarwalyson',
  templateUrl: 'editarwalyson.html',
})
export class EditarwalysonPage {
  nome:string;
  senha: string;
  ano:number;
  link:string;
  key:string = "dado";
  dado:any= [];

  constructor(public navCtrl: NavController, public navParams: NavParams, private storage: Storage ) {
    this.nome = this.navParams.get('nome');
    this.ano = this.navParams.get('ano');
    this.senha = this.navParams.get('senha');
    this.link = this.navParams.get('link');
    
  }
  editusu(){
    if(this.link != "" && this.nome != "" && this.senha.length >= 8 && this.ano != 0 && (2021- this.ano) >= 10){
      this.dado.push(
       {
         nome: this.nome,
         senha: this.senha,
         link: this.link,
         ano: this.ano
       }
     );
    
     this.storage.set(this.key, this.dado);
     this.navCtrl.push('HomewalysonPage'); 
   }  else{
    alert("Algo de errado aconteceu");
  }
  }

}
