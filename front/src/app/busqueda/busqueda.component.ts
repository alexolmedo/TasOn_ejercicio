import {Component, OnInit} from '@angular/core';
import {UsuarioRestService} from '../usuario-rest.service';
import {Usuario} from '../usuario';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent implements OnInit {
  usuarios: Usuario[] = [];

  constructor(
    private readonly _usuarioRest: UsuarioRestService
  ) {
  }

  ngOnInit() {
    const usuarios$ = this._usuarioRest.findAll();
    usuarios$.subscribe((usuarios) => this.usuarios = usuarios);
  }

  eliminarUsuario(id: number | string) {
    const eliminarConductor = this._usuarioRest.delete(id);
    eliminarConductor.subscribe(
      (usuario) => {
        this.usuarios.splice(this.usuarios.findIndex((m) => m.id === id), 1);
        alert('Usuario eliminado exitosamente');
      },
      (error) => alert('No se pudo eliminar el usuario ' + id)
    );
  }

}
