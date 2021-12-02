import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ModeloIdentificar } from '../modelos/identificar.modelo';

@Injectable({
  providedIn: 'root'
})
export class SeguridadService {

  constructor(private http: HttpClient) { }

  Identificar(modelo: any): Observable<ModeloIdentificar> {
    let usuario = modelo.username
    let clave = modelo.password
    return this.http.post("localhost:3000/validar-usuario", {
      usuario: usuario,
      clave: clave
    }, {
      headers: new HttpHeaders({

      })
    })
  }

  Crearusuario(): Observable<any> {
    return this.http.post("localhost:3000/usuarios", {
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

}
