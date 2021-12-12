import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UserModel } from 'src/app/modelos/user.model';
import { LocalstorageService } from 'src/app/servicios/localstorage/localstorage.service';

@Component({
  selector: 'app-actualizarperfil',
  templateUrl: './actualizarperfil.component.html',
  styleUrls: ['./actualizarperfil.component.css']
})
export class ActualizarperfilComponent implements OnInit {

  public usuariodata: any | undefined;
  form: FormGroup = new FormGroup({});

  constructor(
    private serviciolocal:LocalstorageService,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.usuariodata = this.serviciolocal.getdata()
  }

  actualizardatos(){
    let usuarioForm = new UserModel()
    usuarioForm._id = this.usuariodata._id
    usuarioForm.nombre = this.GetForm.nombre.value;
    usuarioForm.correo = this.usuariodata.correo;
    usuarioForm.telefono = this.GetForm.telefono.value;
    usuarioForm.clave = this.usuariodata.clave;
    usuarioForm.direccion = this.GetForm.direccion.value;
    usuarioForm.ciudad = this.GetForm.ciudad.value;
    usuarioForm.pais = this.GetForm.pais.value;
    console.log(usuarioForm)
  }

  get GetForm() {
    return this.form.controls;
  }

}
