import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { GetUserComponent } from './user/get-user/get-user.component';
import { PerfilComponent } from './user/perfil/perfil/perfil.component';

const routes: Routes = [
  {
    path: "singup",
    component: SignUpComponent
  },
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "reset-password",
    component: ResetPasswordComponent
  },
  {
    path:"user",
    component: GetUserComponent
  },
  {
    path:"perfil/:id",
    component: PerfilComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SecurityRoutingModule { }
