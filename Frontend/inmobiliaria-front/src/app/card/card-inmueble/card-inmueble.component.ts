import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-card-inmueble',
  templateUrl: './card-inmueble.component.html',
  styleUrls: ['./card-inmueble.component.css']
})
export class CardInmuebleComponent implements OnInit {
  
  @Input() dataEntrante: any;
  public image: string | undefined;
  public link: string | undefined;
  public titulo: string | undefined;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.image = this.dataEntrante.url;
    this.titulo = this.dataEntrante.nombre;
    this.link = `/detalle/${this.dataEntrante.id}`
  }

}
