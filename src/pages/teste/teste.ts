import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams , ModalController} from 'ionic-angular';

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
  ano:number;
  idade:boolean=true;
  checkbutton:boolean=true;
  checkname:boolean=true;
  check:boolean=true;
  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController) {
    
  }

   ionViewDidLoad() {
   //console.log('ionViewDidLoad TestePage');
     //alert('olá');
   }
  // ionViewWillEnter(){
  // alert('olá 1');
  // }
  // ionViewDidEnter(){
  //   alert("olá 2");
  // }

//Refactor

 VerificarIdade(){
   if((2021 - this.ano) >= 18 && (2021 - this.ano) <= 110){
    this.checkname = false;
   }
   else{
     this.checkname = true;
   }

 }
 VerificarNome(){
   if(this.nome == " "){
    this.check = true;
   }
   else{
     this.check = false;
   }
 }

 CliqueModal(){
   if(this.checkbutton == false){
    const modal = this.modalCtrl.create('Page4Page', {nome:this.nome});
    modal.present();       
   }
   else{
     alert("Por favor escolha a opção SIM e tente novamente.");
     this.checkbutton = false;
   }
 }
 AbraPagina(){
  if(this.checkbutton == false){
   const id = 2021 - this.ano;
    this.navCtrl.push('Page4Page', {
    nome:this.nome,
    idade: id
   });       
  }
  else{
    alert("Por favor escolha a opção SIM e tente novamente.");
    this.checkbutton = false;
   }
  }
 }
//------------------------------






