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
  id:any;
  senha: string;
  ano:number;
  link:string;
  key:string = "dados";
  dado:any= [];

  constructor(public navCtrl: NavController, public navParams: NavParams, private storage: Storage ) {
    this.id = this.navParams.get('id');
    this.storage.get("dados").then((val:any[])=>{
      //items[1].nome = "MarketShare";
        this.nome = val[this.id].nome; 
        this.senha = val[this.id].senha
        this.link = val[this.id].link;
        this.ano = val[this.id].ano;
    });
  }




  editusu(){
    if(this.link != "" && this.nome != "" && this.senha.length >= 8 && this.ano != 0 && (2021- this.ano) >= 10){
    this.storage.get("dados").then((val:any[])=>{
      for(let i=0; i < val.length; i++){
        if(val[i].nome == this.nome && val[i].senha == this.senha){
          alert("Você não alterou nenhum campo.");
        }
      }
      //items[1].nome = "MarketShare";
        val[this.id].nome = this.nome;
        val[this.id].senha = this.senha;
        val[this.id].link = this.link;
        val[this.id].ano = this.ano;

     this.storage.set(this.key, val);

      this.navCtrl.push('HomewalysonPage');   
    }); 
    }  else{
      alert("Algo deu errado verifique nome e senha, e tente novamente !!");
  }
    
  }


}
