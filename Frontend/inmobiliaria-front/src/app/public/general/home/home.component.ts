import { Attribute, Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SeguridadService } from 'src/app/servicios/seguridad.service';
import { inmueble } from '../General/inmueble';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private service:SeguridadService
    ) { 
  }

  public inmuebleList: Array<any> | undefined;
  
  ngOnInit(): void {
    this.inmuebleList = [{
      nombre:"NorteOccidente",
      url: "https://cdn.pixabay.com/photo/2016/06/24/10/47/house-1477041_960_720.jpg",
      id: "1"
    },{
      nombre:"NorteOriente",
      url: "https://cdn.pixabay.com/photo/2014/11/21/17/17/house-540796_960_720.jpg",
      id: "2"
    },{
      nombre:"SurOccidente",
      url: "https://cdn.pixabay.com/photo/2014/07/10/17/18/large-home-389271_960_720.jpg",
      id: "3"
    },{
      nombre:"SurOriente",
      url: "https://cdn.pixabay.com/photo/2017/04/10/22/28/residence-2219972_960_720.jpg",
      id: "4"
    },{
      nombre:"DondeTodosQieren",
      url: "https://cdn.pixabay.com/photo/2016/08/11/23/48/mountains-1587287_960_720.jpg",
      id: "5"
    }];
  }

  solicitar(): void{
    this.service.Solicitarusuario().subscribe({
      next: (data:any) =>{
        console.log(data)
      },
      error: (error:any) =>{
        console.log(error)
      }
    })
  }
}
