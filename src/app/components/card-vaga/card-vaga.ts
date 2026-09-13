import { Component, Input } from '@angular/core';
import { Vaga } from '../../models/vaga'

@Component({
  selector: 'app-card-vaga',
  imports: [],
  templateUrl: './card-vaga.html',
  styleUrl: './card-vaga.css',
})

export class CardVaga {
  @Input({ required: true }) vaga!: Vaga;

  detalhesVisiveis: boolean = false;
  favorita: boolean = false;
  candidaturaEnviada: boolean = false;

  alterarDetalhes(): void {
    this.detalhesVisiveis = !this.detalhesVisiveis;
  }
;
  alterarFavorito(): void {
    this.favorita = !this.favorita;
  }

  candidatar(): void{
    if (this.vaga.aberta){
      this.candidaturaEnviada = true;
    }
  }
}
