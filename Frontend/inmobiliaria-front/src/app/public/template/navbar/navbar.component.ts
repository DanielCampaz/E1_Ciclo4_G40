import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  session: boolean = false;
  link: any;
  id: any = 1

  constructor() { }

  ngOnInit(): void {
    this.link = `/security/perfil/${this.id}`
  }

}
