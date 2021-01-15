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
  dado: any[];
  link:string;
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public modalCtrl: ModalController,
    private storage: Storage 
    ) {
      
     this.storage.get('dados').then((val:any) => 
      {
        this.dado = val;
      });
  }

  adquirirCookie()
  {
    return new Promise((resolve,reject)=>
    {
      this.storage.get('dados').then((val:any) => 
      {
        console.log(val);
      });
    });
  }
 
  openmodal(indice:string){
    this.navCtrl.push('EditarwalysonPage', {
     id: indice });
  }

  backpage(){
    this.navCtrl.pop();
  }


}
