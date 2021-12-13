import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GeneralData } from '../config/general-data';
import { ModeloIdentificar } from '../modelos/identificar.modelo';
import { UserModel } from '../modelos/user.model';
import { UserCredentialsModel } from '../models/user-credencials.model';

@Injectable({
  providedIn: 'root'
})
export class SeguridadService {

  url: string = GeneralData.BUSINESS_URL;

  constructor(private http: HttpClient) { }

  Identificar(modelo: UserCredentialsModel): Observable<ModeloIdentificar> {
    let usuario = modelo.correo
    let clave = modelo.clave
    return this.http.post(`${this.url}/validar-usuario`, {
      usuario,
      clave
    }, {
      headers: new HttpHeaders({

      })
    })
  }

  Crearusuario(modelo: UserCredentialsModel): Observable<ModeloIdentificar> {
    return this.http.post(`${this.url}/usuarios`, modelo, {
      headers: new HttpHeaders({

      })
    })
  }

  Solicitarusuario(id:string): Observable<UserModel> {
    return this.http.get<UserModel>(`${this.url}/usuarios/${id}`)
  }

  RecuperarContrasena(correo: string): Observable<UserModel> {
    return this.http.post(`${this.url}/recuperar-contrasena`, correo, {
      headers: new HttpHeaders({

      })
    })
  }

  ActualizarDatos(modelo: UserModel): Observable<UserModel> {
    return this.http.patch(`${this.url}/usuarios/${modelo._id}`, modelo, {
          headers: new HttpHeaders({

          }
        )
    }
    )
  }

  EleimnarPerfil(id:string){
    return this.http.delete(`${this.url}/usuarios/${id}`)
  }

}
