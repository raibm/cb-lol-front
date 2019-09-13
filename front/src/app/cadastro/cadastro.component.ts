import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})
export class CadastroComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit() {
  }

  navegarLogin(){
    this.route.navigate(['login']);
  }

}
