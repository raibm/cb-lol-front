import { Injectable, EventEmitter } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Perfil } from '../models/perfil.model';

@Injectable()
export class AuthGuard implements CanActivate {

  private usuarioAutenticado: boolean = false;

  mostrarMenuEmitter = new EventEmitter<boolean>();



  constructor(private route: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):
    Observable<boolean> | boolean {
    if (this.usuarioAutenticado) {
      return true;
    }
    this.route.navigate['/login'];

    return false;
  }

  fazerLogin(usuario: Perfil) {
    if (usuario.email === "teste@gmail.pocotom" && usuario.senha === "senhadificil123") {
      this.usuarioAutenticado = true;

      this.mostrarMenuEmitter.emit(true);

      this.route.navigate(['/principal']);
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
