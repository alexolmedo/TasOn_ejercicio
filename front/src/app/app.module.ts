import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {RegistroComponent} from './registro/registro.component';
import {BusquedaComponent} from './busqueda/busqueda.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatMenu, MatMenuModule, MatToolbarModule} from '@angular/material';
import {FormularioComponent} from './formulario/formulario.component';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    RegistroComponent,
    BusquedaComponent,
    FormularioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
