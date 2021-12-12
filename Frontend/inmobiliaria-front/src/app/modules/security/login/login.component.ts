import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GeneralData } from 'src/app/config/general-data';
import { UserCredentialsModel } from 'src/app/models/user-credencials.model';
import { MD5 } from 'crypto-js';
import { SeguridadService } from 'src/app/servicios/seguridad.service';

declare const OpenGeneralMessageModal: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: FormGroup = new FormGroup({});

  constructor(
    private fb: FormBuilder,
    private servicioSeguridad: SeguridadService
  ) { }

  ngOnInit(): void {
    this.CreateForm();
  }


  //OpenGeneralMessageModal(GeneralData.VALID_FORM_MESSAGE) 
  CreateForm() {
    this.form = this.fb.group({
      username: ["", [Validators.required, Validators.email, Validators.minLength(GeneralData.EMAIL_MIN_LENGHT)]],
    })
  }
  Login() {
    if (this.form.invalid) {
      //OpenGeneralMessageModal(GeneralData.INVALID_FORM_MESSAGE)
    } else {
      let modelo = new UserCredentialsModel();
      modelo.nombre = " "
      modelo.correo = this.GetForm.username.value
      modelo.telefono = " "
      modelo.clave = " "
      modelo.direccion = " "
      modelo.ciudad = " "
      modelo.pais = " "
      this.servicioSeguridad.Crearusuario(modelo).subscribe((datos: any) => {
        
        console.log(datos)
      }, (error: any) => {
        //ok
        console.log(error)
      })
    }
  }

  get GetForm() {
    return this.form.controls;
  }
}
