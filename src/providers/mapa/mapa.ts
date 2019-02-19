import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the MapaProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MapaProvider {

  texto:string;

  constructor(public http: Http) {
    console.log('Hello MapaProvider Provider');
  }

  setTexto(texto:string){
    this.texto = texto;
  }

  getTexto(){
    return this.texto;
  }

}
