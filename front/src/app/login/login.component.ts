import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  navegar: boolean = false;
  visualizarLogin: boolean = true;

  constructor() { }

  ngOnInit() {
  }

  navegarCadastro(){
    this.visualizarLogin = false;
    this.navegar = true;
  }

}
