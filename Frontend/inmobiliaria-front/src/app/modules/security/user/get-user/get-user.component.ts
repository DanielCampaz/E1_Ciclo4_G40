import { Component, OnInit } from '@angular/core';
import { UserModel } from 'src/app/modelos/user.model';
import { UserService } from 'src/app/servicios/parametros/user.service';


@Component({
  selector: 'app-get-user',
  templateUrl: './get-user.component.html',
  styleUrls: ['./get-user.component.css']
})
export class GetUserComponent implements OnInit {

  recordList: UserModel[] =[];

  constructor(
    private servicios: UserService
  ) { }

  ngOnInit(): void {
    this.GetRecordList();
  }

  GetRecordList(){
    this.servicios.GetRecordList().subscribe({
      next: (data: UserModel[]) =>{
        this.recordList = data;
      }

    })
  }
}

