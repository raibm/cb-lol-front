import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CadastroComponent } from './cadastro/cadastro.component';
import { PerfilComponent } from './perfil/perfil.component';
import { LoginComponent } from './login/login.component';
import { SobreComponent } from './sobre/sobre.component';
import { PrincipalComponent } from './principal/principal.component';
import { AuthGuard } from './login/auth-guard';

const routes: Routes = [
  {path:'cadastro', component: CadastroComponent},
  {path:'perfil', component: PerfilComponent},
  {path:'login', component: LoginComponent},
  {path:'sobre', component: SobreComponent},
  {path:'principal', component: PrincipalComponent, canActivate: [AuthGuard]}
  ];
  
  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }