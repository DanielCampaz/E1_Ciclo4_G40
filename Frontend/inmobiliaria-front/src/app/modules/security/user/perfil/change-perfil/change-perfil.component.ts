import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { GeneralData } from 'src/app/config/general-data';
import { Perfil_InmobilModel } from 'src/app/modelos/perfil_Inmobil.model';
import { PerfilService } from 'src/app/servicios/parametros/perfil.service';

declare const OpenGeneralMessageModal: any;

@Component({
  selector: 'app-change-perfil',
  templateUrl: './change-perfil.component.html',
  styleUrls: ['./change-perfil.component.css']
})
export class ChangePerfilComponent implements OnInit {

  form:FormGroup = new FormGroup({});

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private servicios: PerfilService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.CreateForm();
    this.SearchRecord();
  }


    
  CreateForm(){
    this.form = this.fb.group({
      _id: ["", [Validators.required]],
      descripcion: ["", [Validators.required]],
      tipo: ["", [Validators.required]],
      n_habitaciones: ["", [Validators.required]],
      n_banos: ["", [Validators.required]],
      precio: ["", [Validators.required]],
      t_pub: ["", [Validators.required]],
      zona: ["", [Validators.required]],
      
    })
  }

  SearchRecord(){
    let _id = this.route.snapshot.params["_id"];
  this.servicios.SearchRecord(_id).subscribe({
    next: (data:Perfil_InmobilModel) => { 
      this.form.controls.id.setValue(data._id);
      this.form.controls.descripcion.setValue(data.descripcion);
    }
  })
  }
  SaveRecord(){
    let model = new Perfil_InmobilModel();
    model._id  = this.form.controls.id.value;
    model.descripcion  = this.form.controls.descripcion.value;
    model.tipo  = this.form.controls.tipo.value;
    model.n_habitaciones  = this.form.controls.n_habitaciones.value;
    model.n_banos  = this.form.controls.n_banos.value;
    model.precio  = this.form.controls.precio.value;
    model.t_pub  = this.form.controls.t_pub.value;
    model.id_zona = this.form.controls.id_zona.value; 

    this.servicios.EditRecord(model).subscribe({
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
