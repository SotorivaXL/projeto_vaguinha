import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Partida } from '../../models/campeonato';
import { CardPartida } from './card-partida';

describe('CardPartida', () => {
  let component: CardPartida;
  let fixture: ComponentFixture<CardPartida>;

  const equipe = {
    nome: 'Equipe Teste',
    cidade: 'Cascavel, PR',
    sigla: 'ET',
    imagem: 'equipes/cascavel-titans.svg',
  };

  const partida: Partida = {
    id: 1,
    rodada: 'Rodada 1',
    data: '27/09/2026',
    dataIso: '2026-09-27T19:00:00-03:00',
    horario: '19:00',
    equipeA: equipe,
    equipeB: equipe,
    placarA: null,
    placarB: null,
    situacao: 'Agendada',
    formato: 'Melhor de 3 mapas',
    mapas: ['Ascent'],
    descricao: 'Partida de teste.',
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({ imports: [CardPartida] }).compileComponents();
    fixture = TestBed.createComponent(CardPartida);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('partida', partida);
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
