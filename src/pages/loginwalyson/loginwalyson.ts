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
  key:string = "dados";
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private storage: Storage
    ) {
  }

  login(){
    if(this.nome != "" && this.senha.length >= 8 ){
      this.storage.get(this.key).then((val:any)=>{
        for(let i=0; i < val.length; i++){
          if(val[i].nome == this.nome && val[i].senha == this.senha){
            this.navCtrl.push('HomewalysonPage', {
              nome: val[i].nome,
              link: val[i].link
            });
          }
          else{
            alert("Algo deu errado verifique nome e senha, e tente novamente !!");
            return false;
          }
        }
      });
     }
     else{
       alert("Algo deu errado verifique nome e senha, e tente novamente !!");
     }
   

  }

  openpage(){
    this.navCtrl.push('RegisterwalysonPage');
  }
}
