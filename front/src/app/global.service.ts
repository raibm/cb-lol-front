import {Injectable} from '@angular/core';
import { Perfil } from './models/perfil.model';



@Injectable()
export class GlobalService {

    private usuarioLogado: Perfil;

    constructor() {
    }

    definirUsuarioLogado(usuario: Perfil){
        this.usuarioLogado = usuario;
    }

    obterUsuarioLogado(){
        return this.usuarioLogado;
    }
}