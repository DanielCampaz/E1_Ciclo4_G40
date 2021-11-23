import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './modules/security/login/login.component';
import { SignUpComponent } from './modules/security/sign-up/sign-up.component';
import { HomeComponent } from './public/general/home/home.component';
import { NotFoundComponent } from './public/errors/not-found/not-found.component';
import { ResetPasswordComponent } from './modules/security/reset-password/reset-password.component';

const routes: Routes = [
  {
    path: "home",
    component: HomeComponent
  },
  {
    path: "",
    pathMatch: "full",
    redirectTo: "/home"
  },
  {
    path: "singup",
    component: SignUpComponent 
  },
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "resetPasword",
    component: ResetPasswordComponent
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
