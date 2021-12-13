import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GeneralData } from 'src/app/config/general-data';
import { UserCredentialsModel } from 'src/app/models/user-credencials.model';
import { MD5 } from 'crypto-js';
import { SeguridadService } from 'src/app/servicios/seguridad.service';
import { LocalstorageService } from 'src/app/servicios/localstorage/localstorage.service';
import { Router } from '@angular/router';

declare const OpenGeneralMessageModal: any;
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  form: FormGroup = new FormGroup({});

  constructor(
    private fb: FormBuilder,
    private servicioSeguridad: SeguridadService,
    private serviciolocal:LocalstorageService,
    private router:Router
  ) { }

  ngOnInit(): void {
    this.CreateForm();
  }


  CreateForm() {
    this.form = this.fb.group({
      username: ["", [Validators.required, Validators.email, Validators.minLength(GeneralData.EMAIL_MIN_LENGHT)]],
      password: ["", [Validators.required, Validators.minLength(GeneralData.PASSWORD_MIN_LENGHT)]]
    })
  }
  
  Signup() {
    if (this.form.invalid) {
      OpenGeneralMessageModal(GeneralData.INVALID_FORM_MESSAGE)
    } else {
      OpenGeneralMessageModal(GeneralData.VALID_FORM_MESSAGE)
      let modelo = new UserCredentialsModel();
      modelo.correo = this.GetForm.username.value;
      modelo.clave = this.GetForm.password.value
      this.servicioSeguridad.Identificar(modelo).subscribe((datos: any) => {
        //ok
        console.log(datos)
        let saved =this.serviciolocal.savesessiondata(datos)
        this.router.navigate(["/security/perfil"])
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