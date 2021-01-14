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
  key:string = "dados";
  objnovo: any= [];
  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    private storage: Storage 
    ) {
     
  }

  getCookie(keys:string){
    return new Promise((resolve, reject) => {
      resolve(
        this.storage.get(keys).then((ret)=>{
          return ret;
        })
      );
    });

  }
  setCookie(key:string, dao:any){
    return new Promise((resolve, reject) => {
      resolve(
        this.storage.set(key,dao).then((retorno)=>{
        return retorno;
        })
      );
    });
  }

  async setCookies(key:string, dados:any){
    const data = await new Promise((resolve, reject) => {
      this.getCookie(key).then((retorno: any) => {
       let v = retorno.concat(dados);
        console.log(v);
        this.setCookie(this.key, v); 
        /*
        this.objnovo = retorno;
        this.objnovo.push(dados);
        this.setCookie(this.key, this.objnovo); */
        resolve(true);
      });
    });
    return data;
  }
  register(){
    if(this.link != "" && this.nome != "" && this.senha.length >= 8 && this.ano != 0 && (2021- this.ano) >= 10){
      let obj:any[] =  [{
        nome: this.nome,
        senha: this.senha,
        link: this.link,
        ano: this.ano
      }];
      
      this.storage.get(this.key).then((ret:any)=>{
        if(ret == null){
          this.storage.set(this.key,obj);
          return;
        }
        if(ret.length > 0 && ret != ''){
          let objnovo = ret.concat(obj);
          this.storage.set(this.key,objnovo);
          return;
        }
      })
       
        } }
      

  openpage(){
   // this.navCtrl.push('LoginwalysonPage');
  /*this.storage.remove("dados").then((ret)=>{
     console.log("apagado");
   })
*/

   this.getCookie(this.key).then((retorno)=>{
   console.log(retorno);
   });
  

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
