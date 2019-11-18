import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BlockUI, NgBlockUI } from 'ng-block-ui';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  constructor(private route: Router) { }
  @BlockUI() blockUI: NgBlockUI;

  ngOnInit() {
    this.blockUI.stop();
  }

  navegarCadastro(){
    this.blockUI.start("Carregando...")
    this.route.navigate(['cadastro']);
  }

  navegarComposicoes(){
    this.route.navigate(['principal']);
  }

}
