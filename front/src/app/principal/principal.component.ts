import { Component, OnInit } from '@angular/core';
import { ComposicaoService } from '../services/composicao.service';
import { BlockUI, NgBlockUI } from 'ng-block-ui';
import { CampeoesUtil } from './campeoes.util';
import { PosicaoMapa } from '../models/posicaoMapa-enum';
import { Composicao } from '../models/composicao.model';
import { GlobalService } from '../global.service';
import { AvatarUtil } from './avatar.util';
import { ComentarioService } from '../services/comentario.service';
import { Comentario } from '../models/comentario.model';
import { UsuarioService } from '../services/usuario.service';

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

  eVisualizacao: boolean = false;

  salvarHabilitado: boolean = true;

  comentarios: Comentario[] = [];

  composicao: Composicao = new Composicao();

  campeaoTop: Object = new Object({ nome: 'selecione', imagem: '../../assets/invocador.png' });
  campeaoMid: Object = new Object({ nome: 'selecione', imagem: '../../assets/invocador.png' });
  campeaoJg: Object = new Object({ nome: 'selecione', imagem: '../../assets/invocador.png' });
  campeaoAdc: Object = new Object({ nome: 'selecione', imagem: '../../assets/invocador.png' });
  campeaoSup: Object = new Object({ nome: 'selecione', imagem: '../../assets/invocador.png' });

  constructor(private composicaoService: ComposicaoService,
    private campeoesUtil: CampeoesUtil,
    private globalService: GlobalService,
    private avataresUtil: AvatarUtil,
    private comentarioService: ComentarioService,
    private usuarioService: UsuarioService) { }

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

  novaComp(){
    this.eVisualizacao = false;
    this.limpar();
    this.definirCampeoesEAvatares();
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
    if(this.composicao.id){
      this.composicaoService.updateComposicao(this.composicao).subscribe(() => {
        this.carregarComposicoes();
      });
    } else {
      this.composicaoService.createComposicoes(this.composicao).subscribe(() => {
        this.carregarComposicoes();
      });
    }
    this.limpar();
  }

  limpar() {
    this.composicao = new Composicao();
    this.campeaoAdc = new Object({ nome: 'selecione', imagem: '../../assets/invocador.png' });
    this.campeaoJg = new Object({ nome: 'selecione', imagem: '../../assets/invocador.png' });
    this.campeaoMid = new Object({ nome: 'selecione', imagem: '../../assets/invocador.png' });
    this.campeaoTop = new Object({ nome: 'selecione', imagem: '../../assets/invocador.png' });
    this.campeaoSup = new Object({ nome: 'selecione', imagem: '../../assets/invocador.png' });
    this.comentarios = [];
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

  obterAvatarInvocador(avatar: number) {
    let avatarInvocador = this.avatares.find(avatarAtual => {
      return avatarAtual.value === avatar;
    });

    return avatarInvocador.url;
  }

  visualizar(comp: Composicao) {
    this.limpar();
    this.composicao = comp;
    this.eVisualizacao = true;
    this.preencherValoresVisualizacao();
  }

  editarComposicao(comp: Composicao){
    this.limpar();
    this.composicao = comp;
    this.eVisualizacao = false;
    this.campeaoAdc = this.composicao.adc_champion;
    this.preencherValoresVisualizacao();
  }

  preencherValoresVisualizacao() {
    this.campeaoTop = this.campeoes.find(campeao => {
      return campeao.value === this.composicao.top_champion;
    });
    this.campeaoJg = this.campeoes.find(campeao => {
      return campeao.value === this.composicao.jg_champion;
    });
    this.campeaoMid = this.campeoes.find(campeao => {
      return campeao.value === this.composicao.mid_champion;
    });
    this.campeaoAdc = this.campeoes.find(campeao => {
      return campeao.value === this.composicao.adc_champion;
    });
    this.campeaoSup = this.campeoes.find(campeao => {
      return campeao.value === this.composicao.sup_champion;
    });
    this.comentarios = this.composicao.comment;

    if(this.eVisualizacao){
      this.obterUsuarioComentario();
    }
  }

  obterUsuarioComentario() {
    this.composicao.comment.forEach(comentario => {
      this.usuarioService.getUsuarioPorId(comentario.id_owner).subscribe(res => {
        comentario.user = res;
      });
    });
  }

  definirAvatar(comentario: Comentario){
    if(comentario && comentario.user){
      let urlAvatar = this.avatares.find(avatar => {
        return avatar.value === comentario.user.avatar;
      });
      return urlAvatar.url;
    }
    return '../../assets/invocador.png';
  }

  novoComentario() {
    let comentario = new Comentario();
    comentario.id_composition = this.composicao.id;
    comentario.id_owner = this.globalService.obterUsuarioLogado().id;
    comentario.user = this.globalService.obterUsuarioLogado();
    this.comentarios.push(comentario);
  }

  salvarComentario() {
    this.blockUI.start('Carregando...')
    this.comentarios.forEach(comentario => {
      if (!comentario.id) {
        this.comentarioService.createComentario(comentario).subscribe(comentario => {
          this.composicaoService.getComposicoes().subscribe(composicoes => {
            this.composicoes = composicoes;
          });
        });
      } else {
        this.comentarioService.updateComentario(comentario).subscribe(comentario => {
          this.composicaoService.getComposicoes().subscribe(composicoes => {
            this.composicoes = composicoes;
          });
        });
      }
    });
    this.blockUI.stop();
  }

  desabilitarEdicao(comentario: Comentario){
    if(comentario.id_owner === this.globalService.obterUsuarioLogado().id){
      return false;
    }
    return true;
  }

  desabilitarExclusao(composicao: Composicao){
    if(composicao.id_owner === this.globalService.obterUsuarioLogado().id){
      return false;
    }
    return true;
  }

  excluirComentario(comentario: Comentario){
    this.comentarios = this.composicao.comment.filter( c => {
      return c.id !== comentario.id;
    })
    this.composicao.comment = this.comentarios;
    this.comentarioService.deleteComentario(comentario).subscribe(() => {
      this.comentarioService.getComentariosComposicao(this.composicao.id).subscribe(comentarios => {
        this.composicao.comment = comentarios;
      })
    });
  }

  excluirComposicao(composicao: Composicao){
    this.composicoes = this.composicoes.filter( c => {
      return c.id !== composicao.id_owner;
    });

    this.composicaoService.deleteComposicao(composicao).subscribe(() => {
      this.composicaoService.getComposicoes().subscribe(composicoes => {
        this.composicoes = composicoes;
      });
    });
  }

  
}
