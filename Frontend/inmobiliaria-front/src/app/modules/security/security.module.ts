import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SecurityRoutingModule } from './security-routing.module';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { CreateUserComponent } from './user/create-user/create-user.component';
import { DeleteUserComponent } from './user/delete-user/delete-user.component';
import { ChangeUserComponent } from './user/change-user/change-user.component';
import { GetUserComponent } from './user/get-user/get-user.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PerfilComponent } from './user/perfil/perfil/perfil.component';
import { CreatePerfilComponent } from './user/perfil/create-perfil/create-perfil.component';
import { ListPerfilComponent } from './user/perfil/list-perfil/list-perfil.component';
import { DeletePerfilComponent } from './user/perfil/delete-perfil/delete-perfil.component';
import { ChangePerfilComponent } from './user/perfil/change-perfil/change-perfil.component';


@NgModule({
  declarations: [
    LoginComponent,
    SignUpComponent,
    ChangePasswordComponent,
    ResetPasswordComponent,
    CreateUserComponent,
    DeleteUserComponent,
    ChangeUserComponent,
    GetUserComponent,
    PerfilComponent,
    CreatePerfilComponent,
    ListPerfilComponent,
    DeletePerfilComponent,
    ChangePerfilComponent
  ],
  imports: [
    CommonModule,
    SecurityRoutingModule, 
    FormsModule, 
    ReactiveFormsModule
  ]
})
export class SecurityModule { }
