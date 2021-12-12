import { Injectable } from '@angular/core';
import { ModeloIdentificar } from 'src/app/modelos/identificar.modelo';

@Injectable({
  providedIn: 'root'
})
export class LocalstorageService {

  constructor() { }

  savesessiondata(data:ModeloIdentificar):boolean{
    let saved = localStorage.getItem("session-data_inmobiliaria");
    if (saved) {
      return false;
    }else{
      let stringdata = JSON.stringify(data)
      localStorage.setItem("session-data_inmobiliaria", stringdata)
      return true 
    }
  }

  removesessiondata():boolean{
    localStorage.removeItem("session-data_inmobiliaria")
    return true
  }

  gettoken(){
    let saved = localStorage.getItem("session-data_inmobiliaria");
    if (saved) {
      let data = JSON.parse(saved)
      return data.token
    }else{
      return null
    }
  }

  getdata(){
    let saved = localStorage.getItem("session-data_inmobiliaria");
    if (saved) {
      let data = JSON.parse(saved)
      return data.usuario
    }else{
      return null
    }
  }
}
