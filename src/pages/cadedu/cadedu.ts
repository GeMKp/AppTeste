import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { IonicStorageModule } from '@ionic/storage';
import { Storage } from '@ionic/storage';
import { resolve } from '@angular/compiler-cli/src/ngtsc/file_system';



/**
 * Generated class for the CadeduPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cadedu',
  templateUrl: 'cadedu.html',
})
export class CadeduPage {

  name: string ;
  senha: string;
  anonasc: number;
  idade:number;
  img: string;
  dados: any = [];
  buttonblock: boolean = true;

  constructor(public navCtrl: NavController, 
    public navParams: NavParams, public viewCtrl: ViewController, 
    private storage: Storage) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CadeduPage');
  }

  disblock(){
    if (this.name != '' && this.senha.length >= 8 && this.anonasc > 1900 && this.img != '') {
      this.buttonblock= false;
    }
  }

  cadastrar(){

    this.idade= 2021 - this.anonasc;
    if (this.name != '' && this.senha.length >= 8 && this.anonasc != 0 && this.idade >= 10 && this.img != '') {
      let obj: any [] = [{
        nome: this.name,
        senha: this.senha,
        datanasc: this.anonasc,
        imagem: this.img
      }];


      this.storage.get('username').then((val:any)=>{
        if (val == null) {
           this.storage.set('username', obj)
           return;
        }
        if (val.length > 0 && val != '') {
          let v = val.concat(obj)
            this.storage.set('username', v)
            return;
        }
      })

    alert("Cadastrado com sucesso!");

      this.name= '';
      this.senha= '';
      this.img= '';
      this.anonasc= 0;

 /*     let teste:any = new Promise((resolve, reject)=>{
        this.storage.get('username')
        .then((data:any)=>{
          resolve(data.length);

          this.quant=data.length;
         
          if (this.quant > 2 && data != '') {
            for(var i = 0; i < data.length; i++){
              for(var j = 0; j < data[i].length; j++){
              this.NewCookie.push(data[i][j]);
              this.storage.set('username', this.NewCookie);
              this.dados.push(this.NewCookie);
              console.log(this.NewCookie); 
             }
            }
          }else{
            alert('false');
          }
          }).catch((erro) => {reject(true); });

      }).then(function (dados: number) {
         
        }).catch(function (err) {
            return err;
          });
      console.log(teste);

      let obj = [
      {
        nome: this.name,
        senha: this.senha,
        datanasc: this.anonasc,
        imagem: this.img
      } 
      ]

      this.dados.push(obj);   

      this.storage.set('username', this.dados);

     alert("Cadastrado com sucesso!");
     console.log(this.dados);
      this.name= '';
      this.senha= '';
      this.img= '';
      this.anonasc= 0;*/
    } else {
      alert ("É necessario preencher todos os campos");
    }

  }

  voltar(){
    this.navCtrl.pop();
  }
  apagar(){
    this.storage.get('username').then((val:any)=>{
      console.log(val)
    })
  }

}
