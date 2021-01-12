import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
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
 senha:string = "";
 dado:any= [];
 key:string = "dado";


  constructor(
    public navCtrl: NavController,
    public navParams: NavParams, 
    private storage: Storage ){
 
  }

 salvarDado(){

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




   this.dado.push(
     {
       nome: this.nome,
       senha: this.senha
     }
   );
  
   this.storage.set(this.key, this.dado).then(function () {
       alert("Você se cadastrou");
     });
 }

 mostrarDado(){

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
     val.forEach((dado:any)=> {
       if(this.senha == dado.senha){
         alert("Bem-vindo " + dado.nome + " sua senha é " + dado.senha);
       }
       else{
         alert("Desculpe verifique se nome ou a senha estão escritos corretamente.")
       }
       
     });
   });
 }

}
