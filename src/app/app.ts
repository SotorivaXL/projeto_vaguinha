import { Component } from '@angular/core';
import { Cabecalho } from './components/cabecalho/cabecalho';
import { CardPartida } from './components/card-partida/card-partida';
import { Classificacao } from './components/classificacao/classificacao';
import { Rodape } from './components/rodape/rodape';
import { Equipe, Partida, PosicaoClassificacao, SituacaoPartida } from './models/campeonato';

@Component({
  selector: 'app-root',
  imports: [Cabecalho, CardPartida, Classificacao, Rodape],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  titulo = 'Campeonato Arena GG 2026';
  nomeUsuario = 'Visitante';
  usuarioLogado = false;
  filtroSituacao = 'Todas';
  somenteAcompanhadas = false;
  partidasAcompanhadas = new Set<number>();

  situacoes: Array<'Todas' | SituacaoPartida> = ['Todas', 'Agendada', 'Ao vivo', 'Encerrada'];

  equipes: Equipe[] = [
    {
      nome: 'Cascavel Titans',
      cidade: 'Cascavel, PR',
      sigla: 'CT',
      imagem: 'equipes/cascavel-titans.svg',
    },
    {
      nome: 'Araucária Gaming',
      cidade: 'Araucária, PR',
      sigla: 'AG',
      imagem: 'equipes/araucaria-gaming.svg',
    },
    { nome: 'Oeste Wolves', cidade: 'Toledo, PR', sigla: 'OW', imagem: 'equipes/oeste-wolves.svg' },
    {
      nome: 'Pinhão Esports',
      cidade: 'Guarapuava, PR',
      sigla: 'PE',
      imagem: 'equipes/pinhao-esports.svg',
    },
    {
      nome: 'Curitiba Five',
      cidade: 'Curitiba, PR',
      sigla: 'C5',
      imagem: 'equipes/curitiba-five.svg',
    },
    {
      nome: 'Londrina Storm',
      cidade: 'Londrina, PR',
      sigla: 'LS',
      imagem: 'equipes/londrina-storm.svg',
    },
  ];

  partidas: Partida[] = [
    {
      id: 1,
      rodada: 'Rodada 1',
      data: '20/09/2026',
      dataIso: '2026-09-20T18:00:00-03:00',
      horario: '18:00',
      equipeA: this.equipes[0],
      equipeB: this.equipes[1],
      placarA: 2,
      placarB: 0,
      situacao: 'Encerrada',
      formato: 'Melhor de 3 mapas',
      mapas: ['Ascent', 'Haven'],
      descricao: 'Os Titans controlaram os dois mapas e abriram o campeonato com vitória.',
    },
    {
      id: 2,
      rodada: 'Rodada 2',
      data: '27/09/2026',
      dataIso: '2026-09-27T20:00:00-03:00',
      horario: '20:00',
      equipeA: this.equipes[2],
      equipeB: this.equipes[3],
      placarA: 1,
      placarB: 1,
      situacao: 'Ao vivo',
      formato: 'Melhor de 3 mapas',
      mapas: ['Bind', 'Lotus', 'Sunset'],
      descricao: 'Confronto equilibrado, com a série seguindo para o mapa decisivo.',
    },
    {
      id: 3,
      rodada: 'Rodada 2',
      data: '28/09/2026',
      dataIso: '2026-09-28T19:30:00-03:00',
      horario: '19:30',
      equipeA: this.equipes[4],
      equipeB: this.equipes[5],
      placarA: null,
      placarB: null,
      situacao: 'Agendada',
      formato: 'Melhor de 3 mapas',
      mapas: ['Haven', 'Icebox', 'Abyss'],
      descricao: 'Curitiba Five e Londrina Storm buscam a primeira vitória na competição.',
    },
    {
      id: 4,
      rodada: 'Rodada 1',
      data: '21/09/2026',
      dataIso: '2026-09-21T20:00:00-03:00',
      horario: '20:00',
      equipeA: this.equipes[1],
      equipeB: this.equipes[4],
      placarA: 2,
      placarB: 1,
      situacao: 'Encerrada',
      formato: 'Melhor de 3 mapas',
      mapas: ['Lotus', 'Sunset', 'Bind'],
      descricao: 'A Araucária Gaming virou a série no terceiro mapa e garantiu três pontos.',
    },
    {
      id: 5,
      rodada: 'Rodada 3',
      data: '04/10/2026',
      dataIso: '2026-10-04T18:00:00-03:00',
      horario: '18:00',
      equipeA: this.equipes[0],
      equipeB: this.equipes[2],
      placarA: null,
      placarB: null,
      situacao: 'Agendada',
      formato: 'Melhor de 3 mapas',
      mapas: ['Ascent', 'Lotus', 'Haven'],
      descricao: 'Duelo direto pelas primeiras posições da tabela do campeonato.',
    },
    {
      id: 6,
      rodada: 'Rodada 3',
      data: '04/10/2026',
      dataIso: '2026-10-04T20:30:00-03:00',
      horario: '20:30',
      equipeA: this.equipes[3],
      equipeB: this.equipes[5],
      placarA: null,
      placarB: null,
      situacao: 'Agendada',
      formato: 'Melhor de 3 mapas',
      mapas: ['Icebox', 'Bind', 'Abyss'],
      descricao: 'As duas equipes fecham a terceira rodada em busca de pontos importantes.',
    },
  ];

  classificacao: PosicaoClassificacao[] = [
    { posicao: 1, equipe: this.equipes[0], pontos: 6, vitorias: 2, derrotas: 0, saldoRounds: 15 },
    { posicao: 2, equipe: this.equipes[1], pontos: 3, vitorias: 1, derrotas: 1, saldoRounds: 2 },
    { posicao: 3, equipe: this.equipes[2], pontos: 3, vitorias: 1, derrotas: 0, saldoRounds: 6 },
    { posicao: 4, equipe: this.equipes[3], pontos: 3, vitorias: 1, derrotas: 1, saldoRounds: 1 },
    { posicao: 5, equipe: this.equipes[4], pontos: 0, vitorias: 0, derrotas: 2, saldoRounds: -11 },
    { posicao: 6, equipe: this.equipes[5], pontos: 0, vitorias: 0, derrotas: 1, saldoRounds: -13 },
  ];

  get partidasExibidas(): Partida[] {
    return this.partidas.filter((partida) => {
      const combinaSituacao =
        this.filtroSituacao === 'Todas' || partida.situacao === this.filtroSituacao;
      const combinaAcompanhamento =
        !this.somenteAcompanhadas || this.partidasAcompanhadas.has(partida.id);
      return combinaSituacao && combinaAcompanhamento;
    });
  }

  get totalAoVivo(): number {
    return this.partidas.filter((partida) => partida.situacao === 'Ao vivo').length;
  }

  get proximaPartida(): Partida | undefined {
    return this.partidas.find((partida) => partida.situacao === 'Agendada');
  }

  alterarLogin(): void {
    this.usuarioLogado = !this.usuarioLogado;
    this.nomeUsuario = this.usuarioLogado ? 'Torcedor' : 'Visitante';
  }

  selecionarSituacao(situacao: 'Todas' | SituacaoPartida): void {
    this.filtroSituacao = situacao;
  }

  alternarFiltroAcompanhadas(): void {
    this.somenteAcompanhadas = !this.somenteAcompanhadas;
  }

  atualizarAcompanhamento(idPartida: number): void {
    if (this.partidasAcompanhadas.has(idPartida)) {
      this.partidasAcompanhadas.delete(idPartida);
    } else {
      this.partidasAcompanhadas.add(idPartida);
    }
    this.partidasAcompanhadas = new Set(this.partidasAcompanhadas);
  }
}
