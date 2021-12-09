import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './modules/security/login/login.component';
import { SignUpComponent } from './modules/security/sign-up/sign-up.component';
import { HomeComponent } from './public/general/home/home.component';
import { NotFoundComponent } from './public/errors/not-found/not-found.component';
import { ResetPasswordComponent } from './modules/security/reset-password/reset-password.component';
import { InmuebleComponent } from './inmueble/inmueble/inmueble.component';

const routes: Routes = [
  {
    path: "home",
    component: HomeComponent
  },
  {
    path: "detalle/:id",
    component: InmuebleComponent
  },
  {
    path: "",
    pathMatch: "full",
    redirectTo: "/home"
  },
  {
    path: "security",
    loadChildren: () => import("./modules/security/security.module").then(x => x.SecurityModule)
  },
  {
    path: "building",
    loadChildren: () => import("./modules/building/building.module").then(x => x.BuildingModule)
  },
  {
    path: "reports",
    loadChildren: () => import("./modules/reports/reports.module").then(x => x.ReportsModule)
  },
  {
    path: "images",
    loadChildren: () => import("./modules/images/images.module").then(x => x.ImagesModule)
  },
  {
    path:"**",
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
