import { Component, Input } from '@angular/core';
import { PosicaoClassificacao } from '../../models/campeonato';

@Component({
  selector: 'app-classificacao',
  imports: [],
  templateUrl: './classificacao.html',
  styleUrl: './classificacao.css',
})
export class Classificacao {
  @Input({ required: true }) posicoes: PosicaoClassificacao[] = [];
}
