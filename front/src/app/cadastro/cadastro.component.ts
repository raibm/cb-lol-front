import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { BlockUI, NgBlockUI } from 'ng-block-ui';
import { Perfil } from '../models/perfil.model';
import { UsuarioService } from '../services/usuario.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})
export class CadastroComponent implements OnInit {

  perfil: Perfil = new Perfil();

  nome: string;

  senha: string;

  email: string;

  avatar: number;

  constructor(private route: Router, private usuarioService: UsuarioService, private formBuilder: FormBuilder
    ) { }

  @BlockUI() blockUI: NgBlockUI;
  @Input() formGroup: FormGroup;

  ngOnInit() {
    this.formGroup = this.formBuilder.group({
      nome: [null, [Validators.required]],
      senha: [null, [Validators.required]],
      email: [null, [Validators.required]],
      avatar: [null, [Validators.required]]
    })
    this.blockUI.stop();
  }

  navegarLogin() {
    if (this.validarCampos()) {
      this.route.navigate(['login']);
      this.blockUI.start("Carregando...");
    }
  }

  criarPerfil() {
    this.blockUI.start('Carregando...');
    if (this.validarCampos()) {
      this.usuarioService.createUsuario(this.perfil).subscribe(usuarioCriado => {
          this.navegarLogin();
      });
    }
    this.blockUI.stop();
  }

  validarCampos() {
    if (this.nome && this.senha && this.email && this.avatar) {
      this.perfil.avatar = this.avatar;
      this.perfil.login = this.nome;
      this.perfil.password = this.senha;
      this.perfil.email = this.email;
      return true;
    }
    return false;
  }

  definirValorAvatar(valor) {
    this.avatar = valor;
  }

}
