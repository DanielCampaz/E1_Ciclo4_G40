import { Component, OnInit } from '@angular/core';
import { LocalstorageService } from 'src/app/servicios/localstorage/localstorage.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  session: boolean = false;
  token: any | undefined;
  constructor(
    private serviciolocal:LocalstorageService
  ) { }

  ngOnInit(): void {
    this.token = this.serviciolocal.gettoken()
    if (this.token != null) {
      this.session = true
    }else{
      this.token = false
    }
  }

}
