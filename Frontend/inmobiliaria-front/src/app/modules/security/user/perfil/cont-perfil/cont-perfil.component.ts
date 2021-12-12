import { Component, Input, OnInit } from '@angular/core';
import { ModeloIdentificar } from 'src/app/modelos/identificar.modelo';
import { UserModel } from 'src/app/modelos/user.model';
import { LocalstorageService } from 'src/app/servicios/localstorage/localstorage.service';

@Component({
  selector: 'app-cont-perfil',
  templateUrl: './cont-perfil.component.html',
  styleUrls: ['./cont-perfil.component.css']
})
export class ContPerfilComponent implements OnInit {

  public usuariodata: any | undefined;

  constructor(
    private serviciolocal:LocalstorageService
  ) { }

  ngOnInit(): void {
    this.usuariodata = this.serviciolocal.getdata()
  }

}
