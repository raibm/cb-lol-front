import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.scss']
})
export class PrincipalComponent implements OnInit {

  composicoes: any[] = [
    {autor: 'Helmsmasher', imgCapa: '../../assets/imagemDeEquipe.jpg', comentarios: '5', titulo: 'Yordle Party!' },
    {autor: 'Arya', imgCapa: '../../assets/imagemDeEquipe2.jpg', comentarios: '1', titulo: 'Tudo pelo Yasuo.' },
    {autor: 'Faker', imgCapa: '../../assets/imagemDeEquipe3.jpg', comentarios: '24', titulo: 'SKT T1 Final 2016' },
    {autor: 'Helmsmasher', imgCapa: '../../assets/imagemDeEquipe4.jpg', comentarios: '7', titulo: 'Only Girls' },
    {autor: 'Helmsmasher', imgCapa: '../../assets/imagemDeEquipe4.jpg', comentarios: '7', titulo: 'Fnatic' },
    {autor: 'Helmsmasher', imgCapa: '../../assets/imagemDeEquipe4.jpg', comentarios: '7', titulo: 'Only Girls' }, 
  ]

  composicoesMaisVotadas: any[] = [
    {autor: 'Helmsmasher', imgCapa: '../../assets/Jinx.png', comentarios: '5', titulo: 'Yordle Party!' },
    {autor: 'Arya', imgCapa: '../../assets/Jinx.png', comentarios: '1', titulo: 'Tudo pelo Yasuo.' },
    {autor: 'Faker', imgCapa: '../../assets/Ezreal.png', comentarios: '24', titulo: 'SKT T1 Final 2016' },
    {autor: 'Helmsmasher', imgCapa: '../../assets/Lux.png', comentarios: '7', titulo: 'Only Girls' }, 
  ]


  constructor() { }

  ngOnInit() {
  }

}
