import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './public/template/header/header.component';
import { FooterComponent } from './public/template/footer/footer.component';
import { NavbarComponent } from './public/template/navbar/navbar.component';
import { NotFoundComponent } from './public/errors/not-found/not-found.component';
import { HomeComponent } from './public/general/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { CardInmuebleComponent } from './card/card-inmueble/card-inmueble.component';
import { InmuebleComponent } from './inmueble/inmueble/inmueble.component';
import { CrearInmuebleComponent } from './inmueble/crear-inmueble/crear-inmueble.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavbarComponent,
    NotFoundComponent,
    HomeComponent,
    CardInmuebleComponent,
    InmuebleComponent,
    CrearInmuebleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
