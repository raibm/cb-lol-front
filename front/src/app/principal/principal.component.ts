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
    {nome: 'Jhin', imagem: '../../assets/opcoesCampeoes/'},
    {nome: 'Jinx', imagem: '../../assets/opcoesCampeoes/Jinx_Render.png'},
    {nome: "kai'sa", imagem: '../../assets/opcoesCampeoes/Kai’Sa_Render.png'},
    {nome: 'Kalista', imagem: '../../assets/opcoesCampeoes/Kalista_Render.png'},
    {nome: 'Karma', imagem: '../../assets/opcoesCampeoes/Karma_Render.png'},
    {nome: 'Karthus', imagem: '../../assets/opcoesCampeoes/Karthus_Render.png'},
    {nome: 'Kassadin', imagem: '../../assets/opcoesCampeoes/Kassadin_Render.png'},
    {nome: 'Katarina', imagem: '../../assets/opcoesCampeoes/Katarina_Render.png'},
    {nome: 'Kayle', imagem: '../../assets/opcoesCampeoes/Kayle_Zealous_Render.png'},
    {nome: 'Kennen', imagem: '../../assets/opcoesCampeoes/Kennen_Render.png'},
    {nome: "Kha'Zix", imagem: '../../assets/opcoesCampeoes/Kha%27Zix_Render.png'},
    {nome: 'Kindred', imagem: '../../assets/opcoesCampeoes/Kindred_Render.png'},
    {nome: 'Kled', imagem: '../../assets/opcoesCampeoes/Kled_render.png'},
    {nome: "Kog'Maw", imagem: '../../assets/opcoesCampeoes/Kog%27Maw_Render.png'},
    {nome: 'LeBlanc', imagem: '../../assets/opcoesCampeoes/LeBlanc_Render.png'},
    {nome: 'Lee Sin', imagem: '../../assets/opcoesCampeoes/Lee_Sin_Render.png'},
    {nome: 'Leona', imagem: '../../assets/opcoesCampeoes/Leona_Render.png'},
    {nome: 'Lissandra', imagem: '../../assets/opcoesCampeoes/Lissandra_Render.png'},
    {nome: 'Lucian', imagem: '../../assets/opcoesCampeoes/Lucian_Render.png'},
    {nome: 'Lulu', imagem: '../../assets/opcoesCampeoes/Lulu_Render.png'},
    {nome: 'Lux', imagem: '../../assets/opcoesCampeoes/Lux_Render.png'},
    {nome: 'Maplhite', imagem: '../../assets/opcoesCampeoes/Malphite_Render.png'},
    {nome: 'Malzahar', imagem: '../../assets/opcoesCampeoes/Malzahar_Render.png'},
    {nome: 'Maokai', imagem: '../../assets/opcoesCampeoes/Maokai_Render.png'},
    {nome: 'Master Yi', imagem: '../../assets/opcoesCampeoes/Master_Yi_Render.png'},
    {nome: 'Miss Fortune', imagem: '../../assets/opcoesCampeoes/Miss_Fortune_Render.png'},
    {nome: 'Mordekaiser', imagem: '../../assets/opcoesCampeoes/Mordekaiser_Render.png'},
    {nome: 'Morgana', imagem: '../../assets/opcoesCampeoes/Morgana_Render.png'},
    {nome: 'Nami', imagem: '../../assets/opcoesCampeoes/Nami_Render.png'},
    {nome: 'Nasus', imagem: '../../assets/opcoesCampeoes/Nasus_Render.png'},
    {nome: 'Nautilus', imagem: '../../assets/opcoesCampeoes/Nautilus_Render.png'},
    {nome: 'Neeko', imagem: '../../assets/opcoesCampeoes/Neeko_Render.png'},
    {nome: 'Nidalee', imagem: '../../assets/opcoesCampeoes/Nidalee_Render.png'},
    {nome: 'Nocturne', imagem: '../../assets/opcoesCampeoes/Nocturne_Render.png'},
    {nome: 'Nunu', imagem: '../../assets/opcoesCampeoes/Nunu_Render.png'},
    {nome: 'Olaf', imagem: '../../assets/opcoesCampeoes/Olaf_Render.png'},
    {nome: 'Orianna', imagem: '../../assets/opcoesCampeoes/Orianna_Render.png'},
    {nome: 'Ornn', imagem: '../../assets/opcoesCampeoes/Ornn_Render.png'},
    {nome: 'Pantheon', imagem: '../../assets/opcoesCampeoes/Pantheon_Render.png'},
    {nome: 'Poppy', imagem: '../../assets/opcoesCampeoes/Poppy_Render.png'},
    {nome: 'Pyke', imagem: '../../assets/opcoesCampeoes/Pyke_Render.png'},
    {nome: 'Qiyana', imagem: '../../assets/opcoesCampeoes/Qiyana_Render.png'},
    {nome: 'Quinn', imagem: '../../assets/opcoesCampeoes/Quinn_Render.png'},
    {nome: 'Rakan', imagem: '../../assets/opcoesCampeoes/Rakan_Render.png'},
    {nome: 'Rammus', imagem: '../../assets/opcoesCampeoes/Rammus_Render.png'},
    {nome: "Rek'Sai", imagem: '../../assets/opcoesCampeoes/Rek%27Sai_Render.png'},
    {nome: 'Renekton', imagem: '../../assets/opcoesCampeoes/Renekton_Render.png'},
    {nome: 'Rengar', imagem: '../../assets/opcoesCampeoes/Rengar_Render.png'},
    {nome: 'Riven', imagem: '../../assets/opcoesCampeoes/Riven_Render.png'},
    {nome: 'Rumble', imagem: '../../assets/opcoesCampeoes/Rumble_Render.png'},
    {nome: 'Ryze', imagem: '../../assets/opcoesCampeoes/Ryze_Render.png'},
    {nome: 'Sejuani', imagem: '../../assets/opcoesCampeoes/Sejuani_Render.png'},
    {nome: 'Shaco', imagem: '../../assets/opcoesCampeoes/Shaco_Render.png'},
    {nome: 'Shen', imagem: '../../assets/opcoesCampeoes/Shen_Render.png'},
    {nome: 'Shyvana', imagem: '../../assets/opcoesCampeoes/Shyvana_Render.png'},
    {nome: 'Singed', imagem: '../../assets/opcoesCampeoes/Singed_Render.png'},
    {nome: 'Sion', imagem: '../../assets/opcoesCampeoes/Sion_Render.png'},
    {nome: 'Sivir', imagem: '../../assets/opcoesCampeoes/Sivir_Render.png'},
    {nome: 'Skarner', imagem: '../../assets/opcoesCampeoes/Skarner_Render.png'},
    {nome: 'Sona', imagem: '../../assets/opcoesCampeoes/Sona_Render.png'},
    {nome: 'Soraka', imagem: '../../assets/opcoesCampeoes/Soraka_Render.png'},
    {nome: 'Swain', imagem: '../../assets/opcoesCampeoes/Swain_Render.png'},
    {nome: 'Sylas', imagem: '../../assets/opcoesCampeoes/Sylas_Render.png'},
    {nome: 'Syndra', imagem: '../../assets/opcoesCampeoes/Syndra_Render.png'},
    {nome: 'Tahm Kench', imagem: '../../assets/opcoesCampeoes/Tahm_Kench_Render.png'},
    {nome: 'Taliyah', imagem: '../../assets/opcoesCampeoes/Taliyah_Render.png'},
    {nome: 'Talon', imagem: '../../assets/opcoesCampeoes/Talon_Render.png'},
    {nome: 'Taric', imagem: '../../assets/opcoesCampeoes/Taric_Render.png'},
    {nome: 'Teemo', imagem: '../../assets/opcoesCampeoes/Teemo_Render.png'},
    {nome: 'Thresh', imagem: '../../assets/opcoesCampeoes/Thresh_Render.png'},
    {nome: 'Tristana', imagem: '../../assets/opcoesCampeoes/Tristana_Render.png'},
    {nome: 'Trundle', imagem: '../../assets/opcoesCampeoes/Trundle_Render.png'},
    {nome: 'Tryndamere', imagem: '../../assets/opcoesCampeoes/Tryndamere_Render.png'},
    {nome: 'Twisted Fate', imagem: '../../assets/opcoesCampeoes/Twisted_Fate_Render.png'},
    {nome: 'Twitch', imagem: '../../assets/opcoesCampeoes/Twitch_Render.png'},
    {nome: 'Udyr', imagem: '../../assets/opcoesCampeoes/Udyr_Render.png'},
    {nome: 'Urgot', imagem: '../../assets/opcoesCampeoes/Urgot_Render.png'},
    {nome: 'Varus', imagem: '../../assets/opcoesCampeoes/Varus_Render.png'},
    {nome: 'Vayne', imagem: '../../assets/opcoesCampeoes/Vayne_Render.png'},
    {nome: 'Veigar', imagem: '../../assets/opcoesCampeoes/Veigar_Render.png'},
    {nome: "Vel'Koz", imagem: '../../assets/opcoesCampeoes/Vel%27Koz_Render.png'},
    {nome: 'Vi', imagem: '../../assets/opcoesCampeoes/Vi_Render.png'},
    {nome: 'Viktor', imagem: '../../assets/opcoesCampeoes/Viktor_Render.png'},
    {nome: 'Vladimir', imagem: '../../assets/opcoesCampeoes/Vladimir_Render.png'},
    {nome: 'Volibear', imagem: '../../assets/opcoesCampeoes/Volibear_Render.png'},
    {nome: 'Warwick', imagem: '../../assets/opcoesCampeoes/Warwick_Render.png'},
    {nome: 'Wukong', imagem: '../../assets/opcoesCampeoes/Wukong_Render.png'},
    {nome: 'Xayah', imagem: '../../assets/opcoesCampeoes/Xayah_Render.png'},
    {nome: 'Xerath', imagem: '../../assets/opcoesCampeoes/Xerath_Render.png'},
    {nome: 'Xin Zhao', imagem: '../../assets/opcoesCampeoes/Xin_Zhao_Render.png'},
    {nome: 'Yasuo', imagem: '../../assets/opcoesCampeoes/Yasuo_Render.png'},
    {nome: 'Yorick', imagem: '../../assets/opcoesCampeoes/Yorick_Render.png'},
    {nome: 'Yuumi', imagem: '../../assets/opcoesCampeoes/Yuumi_Render.png'},
    {nome: 'Zac', imagem: '../../assets/opcoesCampeoes/Zac_Render.png'},
    {nome: 'Zed', imagem: '../../assets/opcoesCampeoes/Zed_Render.png'},
    {nome: 'Ziggs', imagem: '../../assets/opcoesCampeoes/Ziggs_Render.png'},
    {nome: 'Zilean', imagem: '../../assets/opcoesCampeoes/Zilean_Render.png'},
    {nome: 'Zoe', imagem: '../../assets/opcoesCampeoes/Zoe_Render.png'},
    {nome: 'Zyra', imagem: '../../assets/opcoesCampeoes/Zyra_Render.webp'},
  ]


  constructor() { }

  ngOnInit() {
  }

  teste(event){
    console.log(event);
  }
}
