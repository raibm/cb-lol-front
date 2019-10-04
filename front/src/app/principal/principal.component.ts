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
    {nome: 'Bardo', imagem: '../../assets/opcoesCampeoes/Bard_Render.png'},
    {nome: 'Blitzcranck', imagem: '../../assets/opcoesCampeoes/Blitzcrank_Render.png'},
    {nome: 'Brand', imagem: '../../assets/opcoesCampeoes/Brand_Render.png'},
    {nome: 'Braum', imagem: '../../assets/opcoesCampeoes/Braum_Render.png'},
    {nome: 'Caitlyn', imagem: '../../assets/opcoesCampeoes//Caitlyn_Render.png'},
    {nome: 'Camille', imagem: '../../assets/opcoesCampeoes/Camille_Render.png'},
    {nome: 'Cassiopeia', imagem: '../../assets/opcoesCampeoes/Cassiopeia_Render.png'},
    {nome: "Cho'Gath", imagem: '../../assets/opcoesCampeoes/Cho%27Gath_Render.png'},
    {nome: 'Corki', imagem: '../../assets/opcoesCampeoes/Corki_Render.png'},
    {nome: 'Darius', imagem: '../../assets/opcoesCampeoes/Darius_Render.png'},
    {nome: 'Diana', imagem: '../../assets/opcoesCampeoes/Diana_Render.png'},
    {nome: 'Dr. Mundo', imagem: '../../assets/opcoesCampeoes/Dr._Mundo_Render.png'},
    {nome: 'Draven', imagem: '../../assets/opcoesCampeoes/Draven_Render.png'},
    {nome: 'Ekko', imagem: '../../assets/opcoesCampeoes/Ekko_Render.png'},
    {nome: 'Elise', imagem: '../../assets/opcoesCampeoes/Elise_Render.png'},
    {nome: 'Evelynn', imagem: '../../assets/opcoesCampeoes/Evelynn_Render.png'},
    {nome: 'Ezreal', imagem: '../../assets/opcoesCampeoes/Ezreal_Render.png'},
    {nome: 'Fiddlesticks', imagem: '../../assets/opcoesCampeoes/Fiddlesticks_Render.png'},
    {nome: 'Fiora', imagem: '../../assets/opcoesCampeoes/Fiora_Render.png'},
    {nome: 'Fizz', imagem: '../../assets/opcoesCampeoes/Fizz_Render.png'},
    {nome: 'Galio', imagem: '../../assets/opcoesCampeoes/Galio_Render.png'},
    {nome: 'Gangplank', imagem: '../../assets/opcoesCampeoes/Gangplank_Render.png'},
    {nome: 'Garen', imagem: '../../assets/opcoesCampeoes/Garen_Render.png'},
    {nome: 'Gnar', imagem: '../../assets/opcoesCampeoes/Gnar_Render.png'},
    {nome: 'Gragas', imagem: '../../assets/opcoesCampeoes/Gragas_Render.png'},
    {nome: 'Graves', imagem: '../../assets/opcoesCampeoes/Graves_Render.png'},
    {nome: 'Hecarim', imagem: '../../assets/opcoesCampeoes/Hecarim_Render.png'},
    {nome: 'Heimerdinger', imagem: '../../assets/opcoesCampeoes/Heimerdinger_Render.png'},
    {nome: 'Illaoi', imagem: '../../assets/opcoesCampeoes/Illaoi_Render.png'},
    {nome: 'Irelia', imagem: '../../assets/opcoesCampeoes/Irelia_Render.png'},
    {nome: 'Ivern', imagem: '../../assets/opcoesCampeoes/Ivern_Render.png'},
    {nome: 'Janna', imagem: '../../assets/opcoesCampeoes/Janna_Render.png'},
    {nome: 'Jarvan IV', imagem: '../../assets/opcoesCampeoes/Jarvan_IV_Render.png'},
    {nome: 'Jax', imagem: '../../assets/opcoesCampeoes/Jax_Render.png'},
    {nome: 'Jayce', imagem: '../../assets/opcoesCampeoes/Jayce_Render.png'},
    {nome: 'Jhin', imagem: '../../assets/opcoesCampeoes/Jhin_Render.png'},

  ]


  constructor() { }

  ngOnInit() {
  }

  teste(event){
    console.log(event);
  }
}
