import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the DatabaseProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DatabaseProvider 
{
  

  constructor(public http: HttpClient)
  {
  }

  // public getDB() {
  //   return this.sqlite
  //   .create({
  //     name: "aprendendo.db",
  //     location: "default"
  //   });
  // }

  // loadSqlite()
  // {
  //   return new Promise((resolve,reject)=>
  //   {
  //     this.getDB().then((db: SQLiteObject) => 
  //     {
  //       this.db = db;
  //       this.createTableUsuarios(this.db);
  //     });
  //   });
  // }

  // createTableUsuarios(db: SQLiteObject)
  // {
  //     let sql = "create table usuarios("+
  //       "id integer primary key not null autoincrement,"+
  //       "nome varchar(70),"+
  //       "senha varchar(50),"+
  //       "ano_nascimento varchar(4),"+
  //       "foto text"+
  //     ")";
  //     db.executeSql(sql, [])
  //         .then(() => console.log('Executed SQL'))
  //         .catch(e => console.log(e));
  // }

}
