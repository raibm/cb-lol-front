import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Perfil } from '../models/perfil.model';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http: HttpClient) { }

  Url="http://localhost:3333/users"

  getUsuarios(){
    return this.http.get<Perfil[]>(this.Url);
  }

  createUsuario(perfil: Perfil){
    return this.http.post<Perfil>(this.Url,perfil);
  }

  getUsuarioPorId(id: number){
    return this.http.get<Perfil>(this.Url+"/"+id);
  }
}