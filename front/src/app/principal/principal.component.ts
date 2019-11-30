import { Component, OnInit } from '@angular/core';
import { ComposicaoService } from '../services/composicao.service';
import { BlockUI, NgBlockUI } from 'ng-block-ui';
import { CampeoesUtil } from './campeoes.util';
import { PosicaoMapa } from '../models/posicaoMapa-enum';
import { Composicao } from '../models/composicao.model';
import { GlobalService } from '../global.service';
import { AvatarUtil } from './avatar.util';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.scss']
})
export class PrincipalComponent implements OnInit {

  composicoes: any[] = [];

  campeoes: any[] = [];

  avatares: any[] = [];

  eEdicao: boolean = false; 

  salvarHabilitado: boolean = true;

  composicao: Composicao = new Composicao();

  campeaoTop: Object = new Object({ nome: 'selecione', imagem: '../../assets/invocador.png' });
  campeaoMid: Object = new Object({ nome: 'selecione', imagem: '../../assets/invocador.png' });
  campeaoJg: Object = new Object({ nome: 'selecione', imagem: '../../assets/invocador.png' });
  campeaoAdc: Object = new Object({ nome: 'selecione', imagem: '../../assets/invocador.png' });
  campeaoSup: Object = new Object({ nome: 'selecione', imagem: '../../assets/invocador.png' });

  constructor(private composicaoService: ComposicaoService, private campeoesUtil: CampeoesUtil, private globalService: GlobalService, private avataresUtil: AvatarUtil) { }

  @BlockUI() blockUI: NgBlockUI;

  ngOnInit() {
    this.carregarComposicoes();
    this.definirCampeoesEAvatares();
  }

  carregarComposicoes() {
    this.blockUI.start('Carregando...')
    this.composicaoService.getComposicoes().subscribe(composicoesEncontradas => {
      this.composicoes = composicoesEncontradas;
    });
    this.blockUI.stop();
  }

  definirCampeoesEAvatares() {
    this.avatares = this.avataresUtil.obterAvatares();
    this.campeoes = this.campeoesUtil.obterCampeoes();
  }

  selecionarCampeao(campeao, index, posicao) {
    if (!this.verificarCampeaoDuplicado(campeao)) {
      this[posicao] = campeao;
      switch (index) {
        case PosicaoMapa.TOP:
          this.composicao.top_champion = campeao.value;
          break;
        case PosicaoMapa.JG:
          this.composicao.jg_champion = campeao.value;
          break;
        case PosicaoMapa.MID:
          this.composicao.mid_champion = campeao.value;
          break;
        case PosicaoMapa.ADC:
          this.composicao.adc_champion = campeao.value;
          break;
        case PosicaoMapa.SUP:
          this.composicao.sup_champion = campeao.value;
          break;
        default:
          break;
      }
    }
  }

  verificarCampeaoDuplicado(campeao) {
    if (campeao.value === this.composicao.jg_champion ||
      campeao.value === this.composicao.top_champion ||
      campeao.value === this.composicao.mid_champion ||
      campeao.value === this.composicao.adc_champion ||
      campeao.value === this.composicao.sup_champion) {
      return true;
    }
    return false;
  }

  procurarCampeao(index) {
    return this.campeoes.find(campeao => {
      if (campeao.value === index) {
        return campeao
      }
    });
  }

  salvar() {
    this.composicao.id_owner = this.globalService.obterUsuarioLogado().id;
    this.composicaoService.createComposicoes(this.composicao).subscribe(() => {
      this.carregarComposicoes();
    });
    this.limpar();
  }

  limpar() {
    this.composicao = new Composicao();
    this.campeaoAdc = new Object({ nome: 'selecione', imagem: '../../assets/invocador.png' });
    this.campeaoJg = new Object({ nome: 'selecione', imagem: '../../assets/invocador.png' });
    this.campeaoMid = new Object({ nome: 'selecione', imagem: '../../assets/invocador.png' });
    this.campeaoSup = new Object({ nome: 'selecione', imagem: '../../assets/invocador.png' });
    this.campeaoSup = new Object({ nome: 'selecione', imagem: '../../assets/invocador.png' });
  }

  verificarHabilitarSalvar() {
    if (this.composicao.mid_champion &&
      this.composicao.top_champion &&
      this.composicao.jg_champion &&
      this.composicao.adc_champion &&
      this.composicao.sup_champion && this.composicao.title && this.composicao.description) {
      this.salvarHabilitado = false;
    }
    return true;
  }

  obterAvatarInvocador(avatar: number){
    let avatarInvocador = this.avatares.find(avatarAtual => {
     return avatarAtual.value === avatar;
    });

    return avatarInvocador.url;
  }
}
