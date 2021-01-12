import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';

/**
 * Generated class for the RegisterwalysonPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-registerwalyson',
  templateUrl: 'registerwalyson.html',
})
export class RegisterwalysonPage {
  nome:string;
  senha:string = "";
  ano:number;
  link:string;
  dado:any= [];
  key:string = "dado";
  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    private storage: Storage 
    ) {
  }

  register(){
    if(this.link != "" && this.nome != "" && this.senha.length >= 8 && this.ano != 0 && (2021- this.ano) >= 10){
      this.navCtrl.push('HomewalysonPage'); 
       this.dado.push(
        {
          nome: this.nome,
          senha: this.senha
        }
      );
     
      this.storage.set(this.key, this.dado);
      this.navCtrl.push('HomewalysonPage'); 
    }
    else{
      alert("Algo de errado aconteceu");
    }

  
  
    
     
  }

  openpage(){
    this.navCtrl.push('LoginwalysonPage');
  }

  /*
  abrirgaleria(){
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY
    }
    this.camera.getPicture(options).then((imageData) => {
      this.base64Image = 'data:image/jpeg;base64,' + imageData;
      alert(this.base64Image);
    }, (err) => {

    })
  } */
}
