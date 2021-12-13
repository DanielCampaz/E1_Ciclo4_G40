import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ImagenModelSen } from 'src/app/modelos/imagen_en.model';
import { InmuebleModelSen } from 'src/app/modelos/inmueble_en.model';
import { ZonaModelSen } from 'src/app/modelos/zona_en.model';
import { LocalstorageService } from 'src/app/servicios/localstorage/localstorage.service';

@Component({
  selector: 'app-crear-inmueble',
  templateUrl: './crear-inmueble.component.html',
  styleUrls: ['./crear-inmueble.component.css']
})
export class CrearInmuebleComponent implements OnInit {

  form: FormGroup = new FormGroup({});

  constructor(
    private fb: FormBuilder,
    private serviciolocal:LocalstorageService,
  ) { }

  ngOnInit(): void {
    this.crearform();
  }

  crearform(){
    this.form = this.fb.group({
      descripcion: ["", [Validators.required]],
      tipo: ["", [Validators.required]],
      habitaciones: ["", [Validators.required]],
      banos: ["", [Validators.required]],
      precio: ["", [Validators.required]],
      t_pub: ["", [Validators.required]],
      ciudad: ["", [Validators.required]],
      pais: ["", [Validators.required]],
      localidad: ["", [Validators.required]],
      barrio: ["", [Validators.required]],
      direccion: ["", [Validators.required]],
      departamento: ["", [Validators.required]],
      estrato: ["", [Validators.required]],
      nombre: ["", [Validators.required]],
      ubicacion: ["", [Validators.required]],
      imagenes: ["", [Validators.required]],
    })
  }

  crearinmueble(){
    let imagenes = new Array<ImagenModelSen>()
  }

  tomarinmueble(){
    let iduser = this.serviciolocal.getdata()
    let id_zona: string
    let inmueble = new InmuebleModelSen()
    inmueble.descripcion = this.GetForm.descripcion.value
    inmueble.id_usuario = iduser
    inmueble.n_banos = this.GetForm.banos.value
    inmueble.precio = this.GetForm.precio.value
    inmueble.t_pub = this.GetForm.t_pub.value
    inmueble.tipo = this.GetForm.tipo.value
    inmueble.n_habitaciones = this.GetForm.habitaciones.value
    inmueble.id_zona = "pendiente"
  }

  tomarzona(){
    let zona = new ZonaModelSen()
    zona.barrio = this.GetForm.barrio.value
    zona.ciudad = this.GetForm.ciudad.value
    zona.departamento = this.GetForm.departamento.value
    zona.direccion = this.GetForm.direccion.value
    zona.estrato = this.GetForm.estrato.value
    zona.localidad = this.GetForm.localidad.value
    zona.nombre = this.GetForm.nombre.value
    zona.pais = this.GetForm.pais.value
    zona.ubicacion = this.GetForm.ubicacion.value
  }

  get GetForm() {
    return this.form.controls;
  }

}
