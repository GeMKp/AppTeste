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
      
      let obj = [{
          nome: this.nome,
          senha: this.senha,
          link: this.link,
          ano: this.ano
      },
      {
        nome: this.nome,
        senha: this.senha,
        link: this.link,
        ano: this.ano
    }];

      this.dado.push(obj);

     // console.log(this.dado);

     // this.storage.set(this.key, this.dado);
    //  this.navCtrl.push('HomewalysonPage', {
      // nome:this.nome,
      // senha:this.senha,
     //  link:this.link,
      // ano:this.ano
     //}); 
    }
    else{
      alert("Algo de errado aconteceu");
    }

  
  
    
     
  }

  openpage(){
    this.navCtrl.push('LoginwalysonPage');
  }
  
  teste(){
    
  this.storage.length().then(result =>{
    console.log(result);
    if(result > 0){
    let obj = [{
        nome: this.nome,
        senha: this.senha,
        link: this.link,
        ano: this.ano
    }];

      this.storage.get("dados").then((val:any) =>{
       let v = val;
        v.push(obj);
       console.log(v);
      });
        
    }
    else{
    alert("array não existe");
    }
    });


//    let obj = [{
   //   nome: this.nome,
     // senha: this.senha,
      //link: this.link,
      //ano: this.ano
  //}];
  //let dados = [];
  //dados.push(obj);
  //this.storage.set("teste", );
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
