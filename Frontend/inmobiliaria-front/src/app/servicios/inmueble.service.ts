import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GeneralData } from '../config/general-data';
import { InmuebleModel } from '../modelos/inmueble.model';
import { InmuebleModelSen } from '../modelos/inmueble_en.model';

@Injectable({
  providedIn: 'root'
})
export class InmuebleService {

  url: string = GeneralData.BUSINESS_URL;

  constructor(private http: HttpClient) { }

  /*Metodos Para El Inmueble*/

  crearinmueble(modelo:InmuebleModelSen): Observable<InmuebleModel>{
    return this.http.post(`${this.url}/inmuebles`, modelo, {
      headers: new HttpHeaders({

      })
    })
  }

  listarinmuebles(): Observable<InmuebleModel[]>{
    return this.http.get<InmuebleModel[]>(`${this.url}/inmuebles`);
  }

  filtrarinmueble(by:number,desc:string): Observable<InmuebleModel[]>{
    return this.http.get<InmuebleModel[]>(`${this.url}/filtrosInmuebles/${by}/${desc}`);
  }
  /*Metodos Para las Imagenes*/
  /*Metodos Para La Zona*/
}
