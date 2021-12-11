import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GeneralData } from 'src/app/config/general-data';
import { UserModel } from 'src/app/modelos/user.model';
import { UserService } from 'src/app/servicios/parametros/user.service';


declare const OpenGeneralMessageModal: any;

@Component({
  selector: 'app-delete-user',
  templateUrl: './delete-user.component.html',
  styleUrls: ['./delete-user.component.css']
})
export class DeleteUserComponent implements OnInit {
  _id: string = "0";
  public id: any
  nombre: string = "";

  constructor(
    private router: Router,
    private servicios: UserService,
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
      next: (data: UserModel) => {
        if (data._id && data.nombre) {
          this._id = data._id;
          this.nombre = data.nombre;
        }
      }
    })
  }
  RemoveRecord() {
    this.servicios.RemoveRecord(this._id).subscribe({
      next: (data: UserModel) => {
        OpenGeneralMessageModal(GeneralData.REMOVED_MESSAGE)
        this.router.navigate(["/security/get-user"])
      },
      error: (err: any) => {
        OpenGeneralMessageModal(GeneralData.ERROR_MESSAGE)
      }
    });
  }
}

