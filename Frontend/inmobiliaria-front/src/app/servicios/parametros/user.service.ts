import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GeneralData } from 'src/app/config/general-data';
import { UserModel } from 'src/app/modelos/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
    url: string = GeneralData.BUSINESS_URL;
  constructor(
    private http: HttpClient
  ) { }

  GetRecordList(): Observable<UserModel[]>{
    return this.http.get<UserModel[]>(`${this.url}/usuarios`);
  }

  SaveRecord(data: UserModel): Observable<UserModel[]>{
    return this.http.post<UserModel[]>(`${this.url}/usuarios`, {
      nombre: data.nombre,
      correo: data.correo,
      telefono: data.telefono,
      clave: data.clave,
      direccion: data.direccion,
      ciudad: data.ciudad,
      pais: data.pais
    })
    
    };
    SearchRecord(id: string): Observable<UserModel>{
      return this.http.get<UserModel>(`${this.url}/usuarios/${id}`)
    }
    EditRecord(data: UserModel): Observable<UserModel>{
      return this.http.put<UserModel>(`${this.url}/usuarios/${data._id}`,{
        _id: data._id,
        nombre: data.nombre,
        correo: data.correo,
        telefono: data.telefono,
        clave: data.clave,
        direccion: data.direccion,
        ciudad: data.ciudad,
        pais: data.pais
    });
    }
    RemoveRecord(_id: string): Observable<any>{
      return this.http.delete(
        `${this.url}/usuarios/${_id}`,{
    });
    }
  }
