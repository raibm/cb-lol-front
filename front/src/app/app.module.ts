
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';

import { CadastroComponent } from './cadastro/cadastro.component';
import { LoginComponent } from './login/login.component';
import { PerfilComponent } from './perfil/perfil.component';
import { AppRoutingModule } from './app-routing.module';
import { BlockUIModule } from 'ng-block-ui';
import { SobreComponent } from './sobre/sobre.component';
import { PrincipalComponent } from './principal/principal.component';
import { AuthGuard } from './login/auth-guard';
import { GlobalService } from './global.service';
import { HttpClientModule } from '@angular/common/http';
import { CampeoesUtil } from './principal/campeoes.util';
import { AvatarUtil } from './principal/avatar.util';


@NgModule({
  declarations: [
    AppComponent,
    CadastroComponent,
    LoginComponent,
    PerfilComponent,
    SobreComponent,
    PrincipalComponent,
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MDBBootstrapModule.forRoot(),
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BlockUIModule.forRoot(),
    ReactiveFormsModule
  ],
  providers: [AuthGuard, GlobalService, CampeoesUtil, AvatarUtil],
  bootstrap: [AppComponent]
})
export class AppModule { }
    