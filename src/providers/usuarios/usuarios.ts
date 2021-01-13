import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';

/*
  Generated class for the UsuariosProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UsuariosProvider {

  constructor(public http: HttpClient,
    ) 
  {

  }

  // insert(modelo: any)
  // {
  //   return new Promise(()=>
  //   {
      
  //   });
  //   this.databaseDao.getDB().then((db:SQLiteObject)=>
  //   {
  //     let sql = `INSERT INTO usuarios(nome, senha, ano_nascimento, foto) VALUES 
  //     ('${modelo.nome}','${modelo.senha}','${modelo.ano_nascimento}','${modelo.foto}')`;
  //     db.executeSql(sql, []).then(()=>
  //     {
  //       console.log("Usuario Inserido com Sucesso!");
  //     });
  //   });
  // }

  // show()
  // {
  //   return new Promise((resolve, reject)=>
  //   {
  //     this.databaseDao.getDB().then((db:SQLiteObject)=>
  //     {
  //       let sql = `SELECT * FROM usuarios`;
  //       db.executeSql(sql, []).then((retorno:any)=>
  //       {
  //         let usuarios = [];
  //         for(var i = 0; i <= (retorno.rows.length-1); i++)
  //         {
  //           usuarios.push(retorno.rows.item(i));
  //         };
  //         resolve(usuarios);
  //       });
  //     });
  //   });
    
  // }

}
