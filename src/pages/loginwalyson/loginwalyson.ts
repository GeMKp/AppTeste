import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
/**
 * Generated class for the LoginwalysonPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-loginwalyson',
  templateUrl: 'loginwalyson.html',
})
export class LoginwalysonPage {
  nome:string;
  senha:string = "";
  dado:any= [];
  key:string = "dado";
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private storage: Storage
    ) {
  }

  login(){

    if(this.nome == "") {
      alert("Nome não informado");
     return false;
    }
    if (this.senha != ""){
      if(this.senha.length < 8 ){
          alert("Senha precisa ter no mínimo 8 digitos");
          return false;
      } 
    }
    else{
     alert("Senha não informada");
     return false;
    }

    this.storage.get(this.key).then((val:any) =>
    {
      
        if(this.senha == val[0].senha && this.nome == val[0].nome){
        
          this.navCtrl.push('HomewalysonPage'); 
        }
        else{
          alert("Desculpe verifique se nome ou a senha estão escritos corretamente.");
        }
      
    });
    

  }

  openpage(){
    this.navCtrl.push('RegisterwalysonPage');
  }
}
