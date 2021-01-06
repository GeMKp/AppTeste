import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

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
  checkbutton:string='';
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    
  }

  ionViewDidLoad() {
    //console.log('ionViewDidLoad TestePage');
    alert('olá');
  }
ionViewWillEnter(){
  alert('olá 1');
}
  ionViewDidEnter(){
    alert("olá 2");
  }

  teste(){
    alert(this.nome);
  }







}
