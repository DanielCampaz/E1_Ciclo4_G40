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


@NgModule({
  declarations: [
    LoginComponent,
    SignUpComponent,
    ChangePasswordComponent,
    ResetPasswordComponent,
    CreateUserComponent,
    DeleteUserComponent,
    ChangeUserComponent,
    GetUserComponent
  ],
  imports: [
    CommonModule,
    SecurityRoutingModule, 
    FormsModule, 
    ReactiveFormsModule
  ]
})
export class SecurityModule { }
