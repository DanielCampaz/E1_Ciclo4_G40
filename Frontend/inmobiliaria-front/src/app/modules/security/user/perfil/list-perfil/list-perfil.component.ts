import { Component, OnInit } from '@angular/core';
import { Perfil_InmobilModel } from 'src/app/modelos/perfil_Inmobil.model';
import { PerfilService } from 'src/app/servicios/parametros/perfil.service';

@Component({
  selector: 'app-list-perfil',
  templateUrl: './list-perfil.component.html',
  styleUrls: ['./list-perfil.component.css']
})
export class ListPerfilComponent implements OnInit {

  recordList: Perfil_InmobilModel[] =[];
  activo: boolean = true
  constructor(
    private servicios: PerfilService
  ) { }

  ngOnInit(): void {
  }

  GetRecordList(){
    this.servicios.GetRecordList().subscribe({
      next: (data: Perfil_InmobilModel[]) => {
        this.recordList = data;

      }
    })
  }
}
