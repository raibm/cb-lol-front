import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Comentario } from '../models/comentario.model';

@Injectable({
  providedIn: 'root'
})
export class ComentarioService {

  constructor(private http: HttpClient) { }

  Url="http://localhost:3333/comments"

  getComentariosComposicao(id){
    return this.http.get<Comentario[]>(this.Url+"/"+id);
  }

  createComentario(comentario: Comentario){
    return this.http.post<Comentario>(this.Url,comentario);
  }

  deleteComentario(comentario: Comentario){
    return this.http.delete<Comentario>(this.Url+"/"+comentario.id);
  }

  updateComentario(comentario: Comentario){
    return this.http.put<Comentario>(this.Url+'/'+comentario.id, comentario);
  }
}