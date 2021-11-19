import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BuildingRoutingModule } from './building-routing.module';
import { CreateBuildingComponent } from './building/create-building/create-building.component';
import { DeleteBuildingComponent } from './building/delete-building/delete-building.component';
import { ChangeBuildingComponent } from './building/change-building/change-building.component';
import { GetBuildingComponent } from './building/get-building/get-building.component';
import { CreateZoneComponent } from './zone/create-zone/create-zone.component';
import { ChangeZoneComponent } from './zone/change-zone/change-zone.component';
import { DeleteZoneComponent } from './zone/delete-zone/delete-zone.component';
import { GetZoneComponent } from './zone/get-zone/get-zone.component';


@NgModule({
  declarations: [
    CreateBuildingComponent,
    DeleteBuildingComponent,
    ChangeBuildingComponent,
    GetBuildingComponent,
    CreateZoneComponent,
    ChangeZoneComponent,
    DeleteZoneComponent,
    GetZoneComponent
  ],
  imports: [
    CommonModule,
    BuildingRoutingModule
  ]
})
export class BuildingModule { }
