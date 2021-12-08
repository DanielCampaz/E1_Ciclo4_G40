import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GeneralData } from 'src/app/config/general-data';
import { UserCredentialsModel } from 'src/app/models/user-credencials.model';
import {MD5} from 'crypto-js';
import { UserModel } from 'src/app/modelos/user.model';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {

  form:FormGroup = new FormGroup({});

  constructor(
    private fb:FormBuilder,
  ) { }

  ngOnInit(): void {
    this.CreateForm();
  }


    //OpenGeneralMessageModal(GeneralData.VALID_FORM_MESSAGE)
  CreateForm(){
    this.form = this.fb.group({
      nombre: ["", [Validators.required]],
       })
  }
 
  SaveRecord(){
    let model = new UserModel();
    model.nombre = this.form.controls.nombre.value
    model.telefono = this.form.controls.telefono.value
    model.direccion = this.form.controls.direccion.value
    model.clave = this.form.controls.clave.value
    model.correo = this.form.controls.correo.value
  }
}
