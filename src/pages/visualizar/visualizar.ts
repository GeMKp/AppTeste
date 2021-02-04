import { Storage } from '@ionic/storage';
import { Component } from '@angular/core';
import { IonicPage, ModalController, NavController, NavParams } from 'ionic-angular';
///import { FormmodalPage } from '../formmodal/formmodal';

/**
 * Generated class for the VisualizarPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-visualizar',
  templateUrl: 'visualizar.html',
})
export class VisualizarPage {
  ver = [];
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private storage: Storage,
    public modalCtrl: ModalController) {

      this.Cookie();

  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad VisualizarPage');
  }
  Cookie(){
    this.storage.get('Nome').then((total)=>{
      this.ver = total;
    });

  }

  openModal(id:number) {
    this.navCtrl.push("FormmodalPage", {contador: id});

  }
}
