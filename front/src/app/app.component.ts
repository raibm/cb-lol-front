import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalService } from './global.service';
import { AuthGuard } from './login/auth-guard';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'mdb-angular-free';
  logado: boolean = false;

  constructor(private route: Router, private globalService: GlobalService, private authGuard: AuthGuard){}

  ngOnInit(){
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
    this.route.navigate(['login']);
  }

}


