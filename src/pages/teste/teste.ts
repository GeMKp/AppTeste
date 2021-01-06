import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams , ModalController} from 'ionic-angular';
import { Page4Page } from '../page4/page4';
/**
 * Generated class for the TestePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-teste',
  templateUrl: 'teste.html',
})
export class TestePage {
  nome:string;
  checkbutton:boolean=false;
  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController) {
    
  }

   ionViewDidLoad() {
   console.log('ionViewDidLoad TestePage');
     alert('olá');
   }
  // ionViewWillEnter(){
  // alert('olá 1');
  // }
  // ionViewDidEnter(){
  //   alert("olá 2");
  // }

  teste(){
    const modal = this.modalCtrl.create('Page4Page', {nome:this.nome});
    modal.present();

    
  }

  alerta(){
        alert(this.checkbutton);
  }

 env(){
  this.navCtrl.push('Page4Page', {
    nome:this.nome
  }); 
 }





}
