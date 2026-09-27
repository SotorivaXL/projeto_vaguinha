export type SituacaoPartida = 'Agendada' | 'Ao vivo' | 'Encerrada';

export interface Equipe {
  nome: string;
  cidade: string;
  sigla: string;
  imagem: string;
}

export interface Partida {
  id: number;
  rodada: string;
  data: string;
  dataIso: string;
  horario: string;
  equipeA: Equipe;
  equipeB: Equipe;
  placarA: number | null;
  placarB: number | null;
  situacao: SituacaoPartida;
  formato: string;
  mapas: string[];
  descricao: string;
}

export interface PosicaoClassificacao {
  posicao: number;
  equipe: Equipe;
  pontos: number;
  vitorias: number;
  derrotas: number;
  saldoRounds: number;
}
