import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Storage } from '@ionic/storage';
/**
 * Generated class for the LoginwalyPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-loginwaly',
  templateUrl: 'loginwaly.html',
})
export class LoginwalyPage {
 nome:string;
 senha:string;
 dado:any= [];
 key:string = "dado";


  constructor(
    public navCtrl: NavController,
    public navParams: NavParams, 
    private storage: Storage ){
 
  }

 salvarDado(){

 if(this.nome == "" && this.senha == ""){
  alert("Nome e senha não foram informados");
  return;
 }
  else if (this.nome == "") {
    alert("Nome não informado");
    return;
  }
  else if (this.senha == "") {
    alert("Senha não informada");
    return;
  }
  if(this.senha.length < 8 ){
    alert("Senha precisa ter no mínimo 8 digitos");

    return;
  }


   this.dado.push(
     {
       nome: this.nome,
       senha: this.senha
     }
   );
   this.storage.set(this.key, this.dado);
 }

 mostrarDado(){
   this.storage.get(this.key).then((val:any) =>
   {
     val.forEach((dado)=> {
       alert("Bem-vindo " + dado.nome + " sua senha é " + dado.senha);
     });
   });
 }

}
