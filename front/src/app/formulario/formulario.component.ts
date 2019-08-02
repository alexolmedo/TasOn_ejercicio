import {Component, OnInit} from '@angular/core';
import {UsuarioRestService} from "../usuario-rest.service";
import {Router} from "@angular/router";
import {Usuario} from "../usuario";

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  usuario = {
    name: '',
    lastname: '',
    cedula: '',
    email: '',
    company: '',
    position: '',
    address: '',
    birthPlace: '',
    birthDate: '',
    phoneNumber: ''
  };

  constructor(private readonly _usuarioRestService: UsuarioRestService,
              private readonly  _router: Router) {

  }

  ngOnInit() {
  }

  crearUsuario() {
    const registrarUsuario$ = this._usuarioRestService.create(
      this.usuario.name,
      this.usuario.lastname,
      this.usuario.cedula,
      this.usuario.email,
      this.usuario.company,
      this.usuario.position,
      this.usuario.address,
      this.usuario.birthPlace,
      this.usuario.birthDate,
      this.usuario.phoneNumber,
    ).subscribe(
      (usuario: Usuario) => {
        alert(`Usuario creado exitosamente: ${usuario.name} ${usuario.lastname} `);
        const url = [
          '/',
          'home'
        ];
        this._router.navigate(url);
      }, (error => {
        console.error('Error: ', error);
      })
    );
  }

}
