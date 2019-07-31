import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RegistroComponent} from './registro/registro.component';
import {BusquedaComponent} from './busqueda/busqueda.component';


const routes: Routes = [
  {path: 'registro', component: RegistroComponent},
  {path: 'busqueda', component: BusquedaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
