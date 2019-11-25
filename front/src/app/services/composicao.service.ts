import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Composicao } from '../models/composicao.model';

@Injectable({
  providedIn: 'root'
})
export class ComposicaoService {

  constructor(private http: HttpClient) { }

  Url="http://localhost:3333/compositions"

  getComposicoes(){
    return this.http.get<Composicao[]>(this.Url);
  }

  createComposicoes(composicao: Composicao){
    return this.http.post<Composicao>(this.Url,composicao);
  }

  getComposicaoPorId(id: number){
    return this.http.get<Composicao>(this.Url+"/"+id);
  }

  updateComposicao(composicao: Composicao){
    return this.http.put<Composicao>(this.Url+"/"+composicao.id, composicao);
  }

  deleteComposicao(composicao: Composicao){
    return this.http.delete<Composicao>(this.Url+"/"+composicao.id);
  }
}