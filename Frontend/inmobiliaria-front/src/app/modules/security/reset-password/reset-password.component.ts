import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GeneralData } from 'src/app/config/general-data';
import { SeguridadService } from 'src/app/servicios/seguridad.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {

  form: FormGroup = new FormGroup({});

  constructor(
    private fb: FormBuilder,
    private servicioSeguridad: SeguridadService) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      username: ["", [Validators.required, Validators.email, Validators.minLength(GeneralData.EMAIL_MIN_LENGHT)]],
    })
  }

  recueprar():void{
    if (this.form.invalid) {
      //OpenGeneralMessageModal(GeneralData.INVALID_FORM_MESSAGE)
    } else {
      let correo = this.GetForm.username.value
      console.log(correo)
      this.servicioSeguridad.RecuperarContrasena(correo).subscribe((datos: any) => {
        //ok
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
