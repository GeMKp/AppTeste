import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Teste3Page } from '../teste3/teste3';
import { ModalController } from 'ionic-angular';



/**
 * Generated class for the Teste2Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-teste2',
  templateUrl: 'teste2.html',
})
export class Teste2Page {

  name:string;
  check:boolean;
  ano:number;
  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController) {
    // this.teste();
  }

  // ionViewDidLoad() {
  //   // console.log('ionViewDidLoad Teste2Page');
  //   alert('ola');
  // }

  teste(){
    if (2021 - this.ano >= 18 ) {
      this.navCtrl.push('Teste3Page', {data: this.name }); 
    } else {
      alert('Você não tem idade o suficiente, volte depois de alguns anos.')
    }
    // const modal = this.modalCtrl.create('Teste3Page', {data: this.name});
    // modal.present();   
  }

  
  checkout(check:any){
        //alert("valor " + check);
        let doc = window.getSelection();
         alert(doc[0]);
  }

  

}
