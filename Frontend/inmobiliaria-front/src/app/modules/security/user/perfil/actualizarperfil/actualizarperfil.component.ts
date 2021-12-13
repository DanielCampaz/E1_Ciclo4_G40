import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GeneralData } from 'src/app/config/general-data';
import { UserModel } from 'src/app/modelos/user.model';
import { LocalstorageService } from 'src/app/servicios/localstorage/localstorage.service';
import { SeguridadService } from 'src/app/servicios/seguridad.service';

declare const OpenGeneralMessageModal: any;
@Component({
  selector: 'app-actualizarperfil',
  templateUrl: './actualizarperfil.component.html',
  styleUrls: ['./actualizarperfil.component.css']
})
export class ActualizarperfilComponent implements OnInit {

  public usuariodata: any | undefined;
  form: FormGroup = new FormGroup({});
  public desact: boolean = true;
  constructor(
    private serviciolocal:LocalstorageService,
    private servicioSeguridad: SeguridadService,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.usuariodata = this.serviciolocal.getdata()
    this.crearformulario()
  }

  crearformulario(){
    this.form = this.fb.group({
      _id: [this.usuariodata._id],
      nombre: [this.usuariodata.nombre],
      correo: [this.usuariodata.correo],
      telefono: [this.usuariodata.telefono],
      clave: [this.usuariodata.clave],
      direccion: [this.usuariodata.direccion],
      ciudad: [this.usuariodata.ciudad],
      pais: [this.usuariodata.pais]
    })
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
    this.servicioSeguridad.ActualizarDatos(usuarioForm).subscribe((error:any)=>{
      console.log(error)
    })
    let fun = this.serviciolocal.actualizarsesion(this.usuariodata._id)
    console.log(fun)
  }

  get GetForm() {
    return this.form.controls;
  }

}
