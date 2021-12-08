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
    return this.http.get<UserModel[]>('${this.url}/usuarios');
  }

  SaveRecord(data: UserModel): Observable<UserModel[]>{
    return this.http.post<UserModel[]>('${this.url}/usuarios', {
      nombre: data.nombre
    })
    //{
     // headers: new HttpHeaders({
       // Authorization: 'Bearer ${this.token}'
  //})
    };
  }
