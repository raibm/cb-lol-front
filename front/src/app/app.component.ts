import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalService } from './global.service';
import { AuthGuard } from './login/auth-guard';
import { AvatarUtil } from './principal/avatar.util';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'mdb-angular-free';
  logado: boolean = false;
  nomeUsuario = "Desconhecido";
  iconeUsuario = "../assets/invocador.png";
  avatares: any[] = [];

  constructor(private route: Router, private globalService: GlobalService, private authGuard: AuthGuard, private avataresUtil: AvatarUtil){}

  ngOnInit(){
    this.avatares = this.avataresUtil.obterAvatares();
    this.route.navigate(['login']);
  }

  navegarParaCadastro(){
    this.route.navigate(['cadastro']);
  }

  navegarParaSobre(){
    this.route.navigate(['sobre']);
  }

  navegarParaPrincipal(){
    localStorage.removeItem('usuario');
    this.globalService.definirUsuarioLogado(null);
    this.route.navigate(['login']);
  }

  verificarUsuarioLogado(){
    if(this.globalService.obterUsuarioLogado()){
      return true;
    }
    return false;
  }

  deslogar(){
    this.globalService.definirUsuarioLogado(null);
    localStorage.clear();
    this.route.navigate(['/login']);
  }

  definirUsuarioLogado(){
    if(this.globalService.obterUsuarioLogado()){
      return this.globalService.obterUsuarioLogado().login;
    }
    return this.nomeUsuario;
  }

  definirAvatarInvocador(){
    if(this.globalService.obterUsuarioLogado()){
     return this.obterAvatarInvocador(this.globalService.obterUsuarioLogado().avatar);
    }
    return this.iconeUsuario;
  }

  obterAvatarInvocador(avatar: number) {
    let avatarInvocador = this.avatares.find(avatarAtual => {
      return avatarAtual.value === avatar;
    });

    return avatarInvocador.url;
  }

}


