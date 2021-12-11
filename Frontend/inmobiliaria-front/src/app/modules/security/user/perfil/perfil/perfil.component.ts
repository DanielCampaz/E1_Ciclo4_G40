import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  public id:any;
  public change: any | undefined;

  constructor(private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe( (paramMap:any) =>{
      const {params} = paramMap 
      this.id = params.id 
    })
  }
  
  listar():void{
    this.change='Listar'
  }

  infousuario():void{
    this.change='Listar_info_Usuario'
  }

}
