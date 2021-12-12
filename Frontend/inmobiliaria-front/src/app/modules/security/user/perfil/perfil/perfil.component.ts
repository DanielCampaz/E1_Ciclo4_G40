import { Component, OnInit } from '@angular/core';
import { ModeloIdentificar } from 'src/app/modelos/identificar.modelo';
import { LocalstorageService } from 'src/app/servicios/localstorage/localstorage.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  public id:any;
  public change: any | undefined;
  public datosSesion: ModeloIdentificar | undefined;

  constructor(
    private serviciolocal:LocalstorageService
  ) { }

  ngOnInit(): void {
  }
  
  listar():void{
    this.change='Listar'
  }

  infousuario():void{
    this.change='Listar_info_Usuario'
  }

  cerrarsesion():void{
    let local = localStorage.getItem("session-data_inmobiliaria");
    if (local) {
      this.serviciolocal.removesessiondata();
    }
  }

}
