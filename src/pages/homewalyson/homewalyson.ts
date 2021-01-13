import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
/**
 * Generated class for the HomewalysonPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-homewalyson',
  templateUrl: 'homewalyson.html',
})
export class HomewalysonPage {
  nome:string;
  senha: string;
  ano:string;
  idade: number;
  link:string;
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public modalCtrl: ModalController,
    private storage: Storage 
    ) {
      this.adquirirCookie().then((retorno:string)=>
      {
        this.idade = 2021 - parseInt(retorno);
      });
  }

  adquirirCookie()
  {
    return new Promise((resolve,reject)=>
    {
      this.storage.get('dado').then((val:any) => 
      {
        if(val)
        {
          val.forEach((dados:any) => 
          {
            
            this.nome = dados.nome;
            this.senha = dados.senha;
            this.ano = dados.ano;
            this.link = dados.link;
          });
          resolve(this.ano);
        } 
      });
    });
  }
  openmodal(){
    this.adquirirCookie().then((retorno:string)=>
    {
    const modal = this.modalCtrl.create('EditarwalysonPage', {
     nome: this.nome,
     senha: this.senha,
     ano: this.ano,
     link: this.link
  });
  modal.present();
    });

  }

  backpage(){
    this.navCtrl.pop();
  }


}
