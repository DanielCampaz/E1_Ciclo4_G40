import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GeneralData } from 'src/app/config/general-data';
import { Perfil_InmobilModel } from 'src/app/modelos/perfil_Inmobil.model';
import { PerfilService } from 'src/app/servicios/parametros/perfil.service';


declare const OpenGeneralMessageModal: any;

@Component({
  selector: 'app-delete-perfil',
  templateUrl: './delete-perfil.component.html',
  styleUrls: ['./delete-perfil.component.css']
})
export class DeletePerfilComponent implements OnInit {
  _id: string = "0";
  public id: any
  descripcion: string = "";

  constructor(
    private router: Router,
    private servicios: PerfilService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((paramMap: any) => {
      const { params } = paramMap
      this.id = params.id
    })
    this.SearchRecord();
  }

  SearchRecord() {
    let id = this.route.snapshot.params["_id"];
    console.log(id)
    this.servicios.SearchRecord(id).subscribe({
      next: (data: Perfil_InmobilModel) => {
        if (data._id && data.descripcion) {
          this._id = data._id;
          this.descripcion = data.descripcion;
        }
      }
    })
  }
  RemoveRecord() {
    this.servicios.RemoveRecord(this._id).subscribe({
      next: (data: Perfil_InmobilModel) => {
        OpenGeneralMessageModal(GeneralData.REMOVED_MESSAGE)
        this.router.navigate(["/security/user/perfil/list-perfil"])
      },
      error: (err: any) => {
        OpenGeneralMessageModal(GeneralData.ERROR_MESSAGE)
      }
    });
  }
}

