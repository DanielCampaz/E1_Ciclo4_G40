import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearInmuebleComponent } from 'src/app/inmueble/crear-inmueble/crear-inmueble.component';
import { LoginComponent } from './login/login.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { GetUserComponent } from './user/get-user/get-user.component';
import { ActualizarperfilComponent } from './user/perfil/actualizarperfil/actualizarperfil.component';
import { ChangePerfilComponent } from './user/perfil/change-perfil/change-perfil.component';
import { CreatePerfilComponent } from './user/perfil/create-perfil/create-perfil.component';
import { DeletePerfilComponent } from './user/perfil/delete-perfil/delete-perfil.component';
import { ListPerfilComponent } from './user/perfil/list-perfil/list-perfil.component';
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
    path: "perfil/inmueble/subir",
    component: CrearInmuebleComponent
  },
  {
    path:"usuarios",
    component: GetUserComponent
  },
  {
    path:"perfil",
    component: PerfilComponent
  },
  {
    path:"list-perfil",
    component: ListPerfilComponent
  },
  {
    path:"create-perfil",
    component: CreatePerfilComponent
  },
  {
    path:"perfil/actualizar",
    component: ActualizarperfilComponent
  },
  {
    path:"delete-perfil/:id",
    component: DeletePerfilComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SecurityRoutingModule { }
