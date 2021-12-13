import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModeloIdentificar } from 'src/app/modelos/identificar.modelo';
import { InmuebleService } from 'src/app/servicios/inmueble.service';
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
    private serviciolocal:LocalstorageService,
    private router:Router,
    private inmuebleser: InmuebleService
  ) { }

  ngOnInit(): void {
    this.inmuebleser.listarinmuebles().subscribe((datos:any)=>{
      console.log(datos)
    },(error:any)=>{
      console.log(error)
    })
    console.log()
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
      this.router.navigate(["/"])
    }
  }

}
