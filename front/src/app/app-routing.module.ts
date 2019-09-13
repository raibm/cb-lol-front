import { ModuleWithProviders, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CadastroComponent } from './cadastro/cadastro.component';
import { PerfilComponent } from './perfil/perfil.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path:'cadastro', component: CadastroComponent},
  {path:'perfil', component: PerfilComponent},
  {path:'login', component: LoginComponent}
  ];
  
  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }