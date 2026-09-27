import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Partida } from '../../models/campeonato';

@Component({
  selector: 'app-card-partida',
  imports: [],
  templateUrl: './card-partida.html',
  styleUrl: './card-partida.css',
})
export class CardPartida {
  @Input({ required: true }) partida!: Partida;
  @Input() acompanhada = false;
  @Output() acompanhamentoAlterado = new EventEmitter<number>();

  detalhesVisiveis = false;
  palpiteConfirmado = false;

  alterarDetalhes(): void {
    this.detalhesVisiveis = !this.detalhesVisiveis;
  }

  alterarAcompanhamento(): void {
    this.acompanhamentoAlterado.emit(this.partida.id);
  }

  confirmarPalpite(): void {
    if (this.partida.situacao !== 'Encerrada') {
      this.palpiteConfirmado = true;
    }
  }
}
