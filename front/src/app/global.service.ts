import {Injectable} from '@angular/core';
import { Perfil } from './models/perfil.model';



@Injectable()
export class GlobalService {

    private usuarioLogado: Perfil;

    opcoesAvatar: any[] = [
        {label: "Ezreal", value: 1, url: "../../assets/Ezreal.png"},
        {label: "Jinx", value: 2, url: "../../assets/Jinx.png"},
        {label: "Miss Fortuness", value: 3, url: "../../assets/Miss_Fortuness.png"},
        {label: "Pyke", value: 4, url: "../../assets/Pyke.png"},
        {label: "Sylas", value: 5, url: "../../assets/Sylas.png"},
        {label: "Lux", value: 6, url: "../../assets/Lux.png"}
      ]
    

    constructor() {
    }

    definirUsuarioLogado(usuario: Perfil){
        this.usuarioLogado = usuario;
    }

    obterUsuarioLogado(){
        return this.usuarioLogado;
    }

    obterAvatar(valor: number){
        this.opcoesAvatar.forEach(avatar => {
            if(avatar.value === valor){
                return avatar.url;
            }
        })
    }
}