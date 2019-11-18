import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BlockUI, NgBlockUI } from 'ng-block-ui';
import { AuthGuard } from './auth-guard';
import { Perfil } from '../models/perfil.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  constructor(private route: Router, private authGuard: AuthGuard) { }
  @BlockUI() blockUI: NgBlockUI;

  ngOnInit() {
    this.blockUI.stop();
  }

  navegarCadastro(){
    this.blockUI.start("Carregando...")
    this.route.navigate(['cadastro']);
  }

  navegarComposicoes(){
    let usuario: Perfil = new Perfil;
    usuario.nome = "rai";
    usuario.senha = "senhadificil123";
    usuario.email = "teste@gmail.pocotom";
    this.authGuard.fazerLogin(usuario);
  }

}
