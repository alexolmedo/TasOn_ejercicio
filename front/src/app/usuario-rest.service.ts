import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Usuario} from './usuario';
import {map} from 'rxjs/operators';
import {environment} from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsuarioRestService {

  constructor(private readonly _httpClient: HttpClient) {
  }

  create(name: string,
         lastname: string,
         cedula: string,
         email: string,
         company: string,
         position: string,
         address: string,
         birthPlace: string,
         birthDate: string,
         phoneNumber: string): Observable<Usuario> {
    const objetoAGuardar = {
      name: name,
      lastname: lastname,
      cedula: cedula,
      email: email,
      company: company,
      position: position,
      address: address,
      birthPlace: birthPlace,
      birthDate: birthDate,
      phoneNumber: phoneNumber
    };

    const url = environment.url + '/users';
    console.log(url);
    return this._httpClient
      .post(url, objetoAGuardar)
      .pipe(map(r => r as Usuario));
  }
}
