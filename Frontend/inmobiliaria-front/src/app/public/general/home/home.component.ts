import { Attribute, Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { inmueble } from '../General/inmueble';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private route: ActivatedRoute) {
  }
  
  public inmuebleList: Array<number> = [1,2,3,4,5];

  ngOnInit(): void {
  }
}
