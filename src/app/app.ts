import { Component } from '@angular/core';
import { Cabecalho } from './components/cabecalho/cabecalho';
import { CardVaga } from './components/card-vaga/card-vaga';
import { Rodape } from './components/rodape/rodape';
import { Vaga } from './models/vaga';

@Component({
  selector: 'app-root',
  imports: [Cabecalho, CardVaga, Rodape],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  titulo = 'O próximo passo da sua carreira começa aqui';
  nomeUsuario = 'Visitante';
  usuarioLogado = false;
  filtroModalidade = 'Todas';
  somenteFavoritas = false;
  vagasFavoritas = new Set<number>();

  modalidades = ['Todas', 'Remoto', 'Híbrido', 'Presencial'];

  vagas: Vaga[] = [
    {
      id: 1,
      empresa: 'Nexus Tech',
      cargo: 'Desenvolvedor(a) Front-end Júnior',
      salario: 4200,
      localizacao: 'Cascavel, PR',
      modalidade: 'Híbrido',
      descricao:
        'Faça parte de um time colaborativo e ajude a criar experiências digitais modernas e acessíveis.',
      requisitos: ['HTML, CSS e JavaScript', 'Conhecimentos em Angular', 'Git e trabalho em equipe'],
      aberta: true,
      urgente: true,
      imagem: 'empresas/nexus-tech.svg',
    },
    {
      id: 2,
      empresa: 'Aurora Studio',
      cargo: 'UI/UX Designer',
      salario: 5000,
      localizacao: 'Curitiba, PR',
      modalidade: 'Remoto',
      descricao:
        'Transforme problemas complexos em interfaces simples, bonitas e centradas nas pessoas.',
      requisitos: ['Figma', 'Portfólio de interfaces', 'Noções de design system'],
      aberta: true,
      urgente: false,
      imagem: 'empresas/aurora-studio.svg',
    },
    {
      id: 3,
      empresa: 'Ponto Certo',
      cargo: 'Analista de Dados',
      salario: 5800,
      localizacao: 'São Paulo, SP',
      modalidade: 'Híbrido',
      descricao:
        'Converta dados em decisões e desenvolva painéis que apoiam diferentes áreas do negócio.',
      requisitos: ['SQL', 'Power BI', 'Raciocínio analítico'],
      aberta: true,
      urgente: false,
      imagem: 'empresas/ponto-certo.svg',
    },
    {
      id: 4,
      empresa: 'Raiz Criativa',
      cargo: 'Assistente de Marketing',
      salario: 2800,
      localizacao: 'Francisco Beltrão, PR',
      modalidade: 'Presencial',
      descricao:
        'Apoie campanhas, produção de conteúdo e ações que aproximam marcas de suas comunidades.',
      requisitos: ['Boa comunicação', 'Redes sociais', 'Organização'],
      aberta: true,
      urgente: true,
      imagem: 'empresas/raiz-criativa.svg',
    },
    {
      id: 5,
      empresa: 'Lume Finance',
      cargo: 'Estágio em Desenvolvimento',
      salario: 0,
      localizacao: 'Todo o Brasil',
      modalidade: 'Remoto',
      descricao:
        'Aprenda na prática enquanto participa do desenvolvimento de produtos financeiros digitais.',
      requisitos: ['Lógica de programação', 'Vontade de aprender', 'Cursando graduação em TI'],
      aberta: false,
      urgente: false,
      imagem: 'empresas/lume-finance.svg',
    },
    {
      id: 6,
      empresa: 'Movva Log',
      cargo: 'Analista de Suporte',
      salario: 3500,
      localizacao: 'Toledo, PR',
      modalidade: 'Presencial',
      descricao:
        'Ajude nossos clientes a aproveitarem melhor a tecnologia com atendimento ágil e humano.',
      requisitos: ['Conhecimento em redes', 'Atendimento ao cliente', 'Disponibilidade de horário'],
      aberta: true,
      urgente: false,
      imagem: 'empresas/movva-log.svg',
    },
  ];

  get vagasExibidas(): Vaga[] {
    return this.vagas.filter((vaga) => {
      const combinaModalidade =
        this.filtroModalidade === 'Todas' || vaga.modalidade === this.filtroModalidade;
      const combinaFavorito = !this.somenteFavoritas || this.vagasFavoritas.has(vaga.id);
      return combinaModalidade && combinaFavorito;
    });
  }

  get totalVagasAbertas(): number {
    return this.vagas.filter((vaga) => vaga.aberta).length;
  }

  alterarLogin(): void {
    this.usuarioLogado = !this.usuarioLogado;
    this.nomeUsuario = this.usuarioLogado ? 'Candidato' : 'Visitante';
  }

  selecionarModalidade(modalidade: string): void {
    this.filtroModalidade = modalidade;
  }

  alternarFiltroFavoritas(): void {
    this.somenteFavoritas = !this.somenteFavoritas;
  }

  atualizarFavorita(idVaga: number): void {
    if (this.vagasFavoritas.has(idVaga)) {
      this.vagasFavoritas.delete(idVaga);
    } else {
      this.vagasFavoritas.add(idVaga);
    }
    this.vagasFavoritas = new Set(this.vagasFavoritas);
  }
}
