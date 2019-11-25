import { Injectable, EventEmitter } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Perfil } from '../models/perfil.model';
import { GlobalService } from '../global.service';
import { NgBlockUI, BlockUI } from 'ng-block-ui';

@Injectable()
export class AuthGuard implements CanActivate {

  private usuarioAutenticado: boolean = false;

  mostrarMenuEmitter = new EventEmitter<boolean>();

  @BlockUI() blockUI: NgBlockUI;

  constructor(private route: Router, private globalService: GlobalService) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):
    Observable<boolean> | boolean {
    if (this.usuarioAutenticado) {
      return true;
    }
    this.route.navigate['/login'];

    return false;
  }

  fazerLogin(usuario: Perfil) {
    this.blockUI.start("Carregando...")
    if (usuario.nome === "rai" && usuario.senha === "123") {
      this.usuarioAutenticado = true;

      this.mostrarMenuEmitter.emit(true);

      this.globalService.definirUsuarioLogado(usuario);

      this.route.navigate(['/principal']);
      this.blockUI.stop();
    } else {
      this.usuarioAutenticado = false;
      this.mostrarMenuEmitter.emit(false);
      this.route.navigate(['/login']);
    }
  }

  usuarioEstaAutenticado() {
    return this.usuarioAutenticado;
  }

}
