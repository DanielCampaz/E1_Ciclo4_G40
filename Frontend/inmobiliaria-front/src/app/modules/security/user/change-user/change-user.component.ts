import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { GeneralData } from 'src/app/config/general-data';
import { UserModel } from 'src/app/modelos/user.model';
import { UserService } from 'src/app/servicios/parametros/user.service';

declare const OpenGeneralMessageModal: any;

@Component({
  selector: 'app-change-user',
  templateUrl: './change-user.component.html',
  styleUrls: ['./change-user.component.css']
})
export class ChangeUserComponent implements OnInit {

  form:FormGroup = new FormGroup({});

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private servicios: UserService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.CreateForm();
    this.SearchRecord();
  }


    
  CreateForm(){
    this.form = this.fb.group({
      _id: ["", [Validators.required]],
      nombre: ["", [Validators.required]],
      correo: ["", [Validators.required]],
      telefono: ["", [Validators.required]],
      clave: ["", [Validators.required]],
      direccion: ["", [Validators.required]],
      ciudad: ["", [Validators.required]],
      pais: ["", [Validators.required]],
      
    })
  }

  SearchRecord(){
    let _id = this.route.snapshot.params["_id"];
  this.servicios.SearchRecord(_id).subscribe({
    next: (data:UserModel) => { 
      this.form.controls.id.setValue(data._id);
      this.form.controls.nombre.setValue(data.nombre);
    }
  })
  }
  SaveRecord(){
    let model = new UserModel();
    model._id  = this.form.controls.id.value;
    model.nombre  = this.form.controls.nombre.value;
    model.correo  = this.form.controls.correo.value;
    model.telefono  = this.form.controls.telefono.value;
    model.clave  = this.form.controls.clave.value;
    model.direccion  = this.form.controls.direccion.value;
    model.ciudad  = this.form.controls.ciudad.value;
    model.pais = this.form.controls.pais.value; 

    this.servicios.EditRecord(model).subscribe({
      next: (data: UserModel) =>{
      OpenGeneralMessageModal(GeneralData.SAVED_MESSAGE)
      this.router.navigate(["/security/get-user"])
      },
      error: (err:any)=>{
        OpenGeneralMessageModal(GeneralData.ERROR_MESSAGE)
      }
    });
  }
}