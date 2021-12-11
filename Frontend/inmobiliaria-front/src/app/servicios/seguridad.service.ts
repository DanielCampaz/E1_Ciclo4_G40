import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GeneralData } from '../config/general-data';
import { ModeloIdentificar } from '../modelos/identificar.modelo';
import { UserModel } from '../modelos/user.model';

@Injectable({
  providedIn: 'root'
})
export class SeguridadService {

  url:string = GeneralData.BUSINESS_URL;

  constructor(private http: HttpClient) { }

  Identificar(modelo: any): Observable<ModeloIdentificar> {
    return this.http.post(`${this.url}/validar-usuario`, modelo, {
      headers: new HttpHeaders({

      })
    })
  }

  Crearusuario(): Observable<any> {
    return this.http.post(`${this.url}/usuarios`, {
      nombre: "Juan",
      correo: "juan@gmial.com",
      telefono: "303121" ,
      clave: "121321321",
      direccion: "calle 34",
      ciudad:"Any" ,
      pais: "Colombia"
    },{
      headers: new HttpHeaders({

      })
    })
  }

  Solicitarusuario():Observable<UserModel>{
    return this.http.get<UserModel>(`${this.url}/usuarios`)
  }

}
