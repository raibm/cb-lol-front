import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Perfil } from '../models/perfil.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http: HttpClient) { }

  Url="http://localhost:3333/users"
  UrlLogin="http://localhost:3333/login"

  getUsuarios(){
    return this.http.get<Perfil[]>(this.Url);
  }

  createUsuario(perfil: Perfil){
    return this.http.post<Perfil>(this.Url,perfil);
  }

  getUsuarioPorId(id: number){
    return this.http.get<Perfil>(this.Url+"/"+id);
  }

  verificarLogin(perfil: Perfil): Observable<Perfil>{
    return this.http.post<Perfil>(this.UrlLogin, perfil);
  }
}