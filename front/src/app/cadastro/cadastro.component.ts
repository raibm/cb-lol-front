import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BlockUI, NgBlockUI } from 'ng-block-ui';
import { Perfil } from '../models/perfil.model';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})
export class CadastroComponent implements OnInit {

  perfil: Perfil;

  nome: string;

  senha: string;

  email: string;

  avatar: number;

  constructor(private route: Router) { }

  @BlockUI() blockUI: NgBlockUI;

  ngOnInit() {
    this.blockUI.stop();
  }

  navegarLogin() {
    this.route.navigate(['login']);
    this.blockUI.start("Carregando...")
  }

  criarPerfil() {
    if (this.validarCampos) {
      this.perfil.avatar = this.avatar;
      this.perfil.nome = this.nome;
      this.perfil.senha = this.senha;
      this.perfil.email = this.email;
    }
  }

  validarCampos() {
    if (this.nome && this.senha && this.email && this.avatar) {
      return true;
    }
    return false;
  }

  definirValorAvatar(valor){
    this.avatar = valor;
  }

}
