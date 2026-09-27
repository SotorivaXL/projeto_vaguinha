import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Vaga } from '../../models/vaga';

@Component({
  selector: 'app-card-vaga',
  imports: [],
  templateUrl: './card-vaga.html',
  styleUrl: './card-vaga.css',
})
export class CardVaga {
  @Input({ required: true }) vaga!: Vaga;
  @Input() favorita = false;
  @Output() favoritaAlterada = new EventEmitter<number>();

  detalhesVisiveis = false;
  candidaturaEnviada = false;

  alterarDetalhes(): void {
    this.detalhesVisiveis = !this.detalhesVisiveis;
  }

  alterarFavorito(): void {
    this.favoritaAlterada.emit(this.vaga.id);
  }

  candidatar(): void {
    if (this.vaga.aberta) {
      this.candidaturaEnviada = true;
    }
  }
}
