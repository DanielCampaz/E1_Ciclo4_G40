import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { GeneralData } from 'src/app/config/general-data';
import { Perfil_InmobilModel } from 'src/app/modelos/perfil_Inmobil.model';
import { PerfilService } from 'src/app/servicios/parametros/perfil.service';



declare const OpenGeneralMessageModal: any;
@Component({
  selector: 'app-create-perfil',
  templateUrl: './create-perfil.component.html',
  styleUrls: ['./create-perfil.component.css']
})
export class CreatePerfilComponent implements OnInit {

  form:FormGroup = new FormGroup({});

  constructor(
    private fb:FormBuilder,
    private router: Router,
    private servicios: PerfilService
  ) { }

  ngOnInit(): void {
    this.CreateForm();
  }


    
  CreateForm(){
    this.form = this.fb.group({
      descripcion: ["", [Validators.required]],
      tipo: ["", [Validators.required]],
      n_habitaciones: ["", [Validators.required]],
      n_banos: ["", [Validators.required]],
      precio: ["", [Validators.required]],
      t_pub: ["", [Validators.required]],
      zona: ["", [Validators.required]],
      
    })
  }

  SaveRecord(){
    let model = new Perfil_InmobilModel();
    model.descripcion  = this.form.controls.descripcion.value;
    model.tipo  = this.form.controls.tipo.value;
    model.n_habitaciones  = this.form.controls.n_habitaciones.value;
    model.n_banos  = this.form.controls.n_banos.value;
    model.precio  = this.form.controls.precio.value;
    model.t_pub  = this.form.controls.t_pub.value;
    model.id_zona = this.form.controls.id_zona.value; 

    this.servicios.SaveRecord(model).subscribe({
      next: (data: Perfil_InmobilModel) =>{
      OpenGeneralMessageModal(GeneralData.SAVED_MESSAGE)
      this.router.navigate(["/security/user/perfil/list-perfil"])
      },
      error: (err:any)=>{
        OpenGeneralMessageModal(GeneralData.ERROR_MESSAGE)
      }
    });
  }
}
