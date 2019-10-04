import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.scss']
})
export class PrincipalComponent implements OnInit {

  composicoes: any[] = [
    {autor: 'Helmsmasher', imgCapa: '../../assets/Jinx.png', comentarios: '5', titulo: 'Yordle Party!' },
    {autor: 'Arya', imgCapa: '../../assets/Jinx.png', comentarios: '1', titulo: 'Tudo pelo Yasuo.' },
    {autor: 'Faker', imgCapa: '../../assets/Ezreal.png', comentarios: '24', titulo: 'SKT T1 Final 2016' },
    {autor: 'Helmsmasher', imgCapa: '../../assets/Lux.png', comentarios: '7', titulo: 'Only Girls' },
    {autor: 'Helmsmasher', imgCapa: '../../assets/Miss_Fortuness.png', comentarios: '7', titulo: 'Fnatic' },
    {autor: 'Helmsmasher', imgCapa: '../../assets/Pyke.png', comentarios: '7', titulo: 'Only Girls' }, 
  ]

  composicoesMaisVotadas: any[] = [
    {autor: 'Helmsmasher', imgCapa: '../../assets/Jinx.png', comentarios: '5', titulo: 'Yordle Party!' },
    {autor: 'Arya', imgCapa: '../../assets/Jinx.png', comentarios: '1', titulo: 'Tudo pelo Yasuo.' },
    {autor: 'Faker', imgCapa: '../../assets/Ezreal.png', comentarios: '24', titulo: 'SKT T1 Final 2016' },
    {autor: 'Helmsmasher', imgCapa: '../../assets/Lux.png', comentarios: '7', titulo: 'Only Girls' }, 
  ]

  campeoes: any[] = [
    {nome: 'Aatrox', imagem: '../../assets/opcoesCampeoes/Aatrox_Render.png', exibir: true},
    {nome: 'Ahri', imagem: '../../assets/opcoesCampeoes/Ahri_Render.png', exibir: true},
    {nome: 'Akali', imagem: '../../assets/opcoesCampeoes/Akali_Render.png', exibir: true},
    {nome: 'Alistar', imagem: '../../assets/opcoesCampeoes/Alistar_Render.png', exibir: true},
    {nome: 'Amumu', imagem: '../../assets/opcoesCampeoes/Amumu_Render.png'},
    {nome: 'Anivia', imagem: '../../assets/opcoesCampeoes/Anivia_Render.png'},
    {nome: 'Annie', imagem: '../../assets/opcoesCampeoes/Annie_Render.png'},
    {nome: 'Ashe', imagem: '../../assets/opcoesCampeoes/Ashe_Render.png', exibir: true},
    {nome: 'Aurelion Sol', imagem: '../../assets/opcoesCampeoes/Aurelion_Sol_Render.png'},
    {nome: 'Azir', imagem: '../../assets/opcoesCampeoes/Azir_Render.png'},
  ]


  constructor() { }

  ngOnInit() {
  }

  teste(event){
    console.log(event);
  }
}
