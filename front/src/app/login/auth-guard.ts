import { Injectable, EventEmitter } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Perfil } from '../models/perfil.model';
import { GlobalService } from '../global.service';
import { NgBlockUI, BlockUI } from 'ng-block-ui';
import { UsuarioService } from '../services/usuario.service';

@Injectable()
export class AuthGuard implements CanActivate {

  private usuarioAutenticado: boolean = false;

  mostrarMenuEmitter = new EventEmitter<boolean>();

  @BlockUI() blockUI: NgBlockUI;

  constructor(private route: Router, private globalService: GlobalService, private usuarioService: UsuarioService) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):
    Observable<boolean> | boolean {
    if (this.usuarioAutenticado) {
      return true;
    }
    this.route.navigate['/login'];

    return false;
  }

  async fazerLogin(usuario: Perfil) {
    this.blockUI.start("Carregando...")

    if (this.verificarUsuarioAtual()) {
      await this.usuarioService.verificarLogin(usuario).subscribe(usuarioLogado => {
        if (usuarioLogado) {
          this.usuarioAutenticado = true;

          this.mostrarMenuEmitter.emit(true);

          this.globalService.definirUsuarioLogado(usuarioLogado);

          localStorage.setItem("usuario", usuarioLogado.id.toString());

          this.route.navigate(['/principal']);

        } else {
          this.usuarioAutenticado = false;

          this.mostrarMenuEmitter.emit(false);

          this.route.navigate(['/login']);

        }
      });

      this.blockUI.stop();
    }

  }

  verificarUsuarioAtual() {
    let a = localStorage.getItem('usuario');
    if (a) {
      this.usuarioService.getUsuarioPorId(Number(a)).subscribe(usuario => {
        this.globalService.definirUsuarioLogado(usuario);
        this.usuarioAutenticado = true;
        this.route.navigate(['/principal']);
      }) 
      return false;
    }
    return true;
  }

  usuarioEstaAutenticado() {
    return this.usuarioAutenticado;
  }

}
