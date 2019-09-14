import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'mdb-angular-free';
  logado: boolean = false;

  constructor(private route: Router){}

  ngOnInit(){
    this.route.navigate(['login']);
  }

  navegarParaCadastro(){
    this.route.navigate(['cadastro']);
  }

  navegarParaSobre(){
    this.route.navigate(['sobre']);
  }

}


