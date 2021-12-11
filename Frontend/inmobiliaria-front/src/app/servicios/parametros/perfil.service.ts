import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GeneralData } from 'src/app/config/general-data';
import { Perfil_InmobilModel } from 'src/app/modelos/perfil_Inmobil.model';

@Injectable({
  providedIn: 'root'
})
export class PerfilService {
  url: string = GeneralData.BUSINESS_URL;
  constructor(
    private http: HttpClient
  ) { }

  GetRecordList(): Observable<Perfil_InmobilModel[]>{
    return this.http.get<Perfil_InmobilModel[]>(`${this.url}/inmuebles`);
  }
  SaveRecord(data: Perfil_InmobilModel): Observable<Perfil_InmobilModel>{
    return this.http.post<Perfil_InmobilModel>(`${this.url}/inmuebles`,{
      descripcion: data.descripcion,
      tipo: data.tipo,
      n_habitaciones: data.n_habitaciones,
      n_banos: data.n_banos,
      precio: data.precio,
      t_pub: data.t_pub,
      id_zona: data.id_zona
  });
  }
  SearchRecord(id: string): Observable<Perfil_InmobilModel>{
    return this.http.get<Perfil_InmobilModel>(`${this.url}/inmuebles/${id}`)
  }
  EditRecord(data: Perfil_InmobilModel): Observable<Perfil_InmobilModel>{
    return this.http.put<Perfil_InmobilModel>(`${this.url}/inmuebles/${data._id}`,{
      _id: data._id,
      descripcion: data.descripcion,
      tipo: data.tipo,
      n_habitaciones: data.n_habitaciones,
      n_banos: data.n_banos,
      precio: data.precio,
      t_pub: data.t_pub,
      id_zona: data.id_zona
  });
  }
  RemoveRecord(_id: string): Observable<any>{
    return this.http.delete(
      `${this.url}/inmuebles/${_id}`,{
  });
  }
}

