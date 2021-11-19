import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ImagesRoutingModule } from './images-routing.module';
import { CreateImagesComponent } from './building-images/create-images/create-images.component';
import { DeleteImagesComponent } from './building-images/delete-images/delete-images.component';
import { ChangeImagesComponent } from './building-images/change-images/change-images.component';
import { GetImagesComponent } from './building-images/get-images/get-images.component';


@NgModule({
  declarations: [
    CreateImagesComponent,
    DeleteImagesComponent,
    ChangeImagesComponent,
    GetImagesComponent
  ],
  imports: [
    CommonModule,
    ImagesRoutingModule
  ]
})
export class ImagesModule { }
