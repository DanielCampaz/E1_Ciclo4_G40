import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

declare const Courrusel: any;

@Component({
  selector: 'app-inmueble',
  templateUrl: './inmueble.component.html',
  styleUrls: ['./inmueble.component.css']
})
export class InmuebleComponent implements OnInit {

  public id: any
  public inmuebleList: Array<any> | undefined;
  public idList: any
  public image: any
  public imagefound: any
  public nombrepublicado: any = "Daniel";

  constructor(private route:ActivatedRoute) { }

  ngOnInit(): void {
    Courrusel();
    this.route.paramMap.subscribe( (paramMap:any) =>{
      const {params} = paramMap 
      this.id = params.id 
    })
    this.inmuebleList = [{
      nombre:"NorteOccidente",
      url: "https://cdn.pixabay.com/photo/2016/06/24/10/47/house-1477041_960_720.jpg",
      id: "1",
      images:[
        "https://cdn.pixabay.com/photo/2016/06/24/10/47/house-1477041_960_720.jpg",
        "https://cdn.pixabay.com/photo/2018/08/15/20/53/bathtub-3609070_960_720.jpg",
        "https://cdn.pixabay.com/photo/2018/07/14/17/19/interior-3538020_960_720.jpg"
      ]
    },{
      nombre:"NorteOriente",
      url: "https://cdn.pixabay.com/photo/2014/11/21/17/17/house-540796_960_720.jpg",
      id: "2",
      images:[
        "https://cdn.pixabay.com/photo/2014/11/21/17/17/house-540796_960_720.jpg",
        "https://cdn.pixabay.com/photo/2018/08/15/20/53/bathtub-3609070_960_720.jpg",
        "https://cdn.pixabay.com/photo/2018/07/14/17/19/interior-3538020_960_720.jpg"
      ]
    },{
      nombre:"SurOccidente",
      url: "https://cdn.pixabay.com/photo/2014/07/10/17/18/large-home-389271_960_720.jpg",
      id: "3",
      images:[
        "https://cdn.pixabay.com/photo/2014/07/10/17/18/large-home-389271_960_720.jpg",
        "https://cdn.pixabay.com/photo/2018/08/15/20/53/bathtub-3609070_960_720.jpg",
        "https://cdn.pixabay.com/photo/2018/07/14/17/19/interior-3538020_960_720.jpg"
      ]
    },{
      nombre:"SurOriente",
      url: "https://cdn.pixabay.com/photo/2017/04/10/22/28/residence-2219972_960_720.jpg",
      id: "4",
      images:[
        "https://cdn.pixabay.com/photo/2017/04/10/22/28/residence-2219972_960_720.jpg",
        "https://cdn.pixabay.com/photo/2018/08/15/20/53/bathtub-3609070_960_720.jpg",
        "https://cdn.pixabay.com/photo/2018/07/14/17/19/interior-3538020_960_720.jpg"
      ]
    },{
      nombre:"DondeTodosQieren",
      url: "https://cdn.pixabay.com/photo/2016/08/11/23/48/mountains-1587287_960_720.jpg",
      id: "5",
      images:[
        "https://cdn.pixabay.com/photo/2016/08/11/23/48/mountains-1587287_960_720.jpg",
        "https://cdn.pixabay.com/photo/2018/08/15/20/53/bathtub-3609070_960_720.jpg",
        "https://cdn.pixabay.com/photo/2018/07/14/17/19/interior-3538020_960_720.jpg"
      ]
    }];
    this.idList = this.inmuebleList[parseInt(this.id)-1]
    this.image = this.idList.url;
    this.imagefound = "https://barcelona.lecool.com/files/2016/02/no-image-available.jpg" 
    console.log(this.idList.images)
  }

  siguiente():void{
    this.image = "https://barcelona.lecool.com/files/2016/02/no-image-available.jpg"
  }

  atras():void{
    if (this.image === "https://barcelona.lecool.com/files/2016/02/no-image-available.jpg") {
      this.image = this.idList.url;
    }
  }

}
