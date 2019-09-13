import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BlockUI, NgBlockUI } from 'ng-block-ui';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})
export class CadastroComponent implements OnInit {

  constructor(private route: Router) { }
  
  @BlockUI() blockUI: NgBlockUI;

  ngOnInit() {
    this.blockUI.stop();
  }

  navegarLogin(){
    this.route.navigate(['login']);
    this.blockUI.start("Carregando...")
  }

}
