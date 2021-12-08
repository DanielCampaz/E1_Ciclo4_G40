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
  public ejem: string = "hola"
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.image = "https://cdn.pixabay.com/photo/2016/11/18/17/46/house-1836070_960_720.jpg"
    console.log(this.dataEntrante)
  }

}
