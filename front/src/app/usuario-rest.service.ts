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

  private model = "/users";

  constructor(private readonly _httpClient: HttpClient) {
  }

  findAll(): Observable<Usuario[]> {
    return this._httpClient
      .get(environment.url + this.model)
      .pipe(map(r => r as Usuario[]));
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

    const url = environment.url + this.model;
    console.log(url);
    return this._httpClient
      .post(url, objetoAGuardar)
      .pipe(map(r => r as Usuario));
  }

  delete(id: number | string): Observable<number> {
    return this._httpClient
      .delete(environment.url + this.model + `/${id}`)
      .pipe(map(r => r as number));
  }
}
