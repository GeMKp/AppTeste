import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

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

  name:string = 't';
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    // this.teste();
  }

  // ionViewDidLoad() {
  //   // console.log('ionViewDidLoad Teste2Page');
  //   alert('ola');
  // }

  teste(){
    alert(this.name);
  }


}
