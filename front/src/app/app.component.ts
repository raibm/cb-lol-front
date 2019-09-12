import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'mdb-angular-free';
  
  constructor(private route: Router){}

  ngOnInit(){
  }

  navegarParaCadastro(){
    console.log("oi");
    this.route.navigate((['cadastro']));
  }

}


