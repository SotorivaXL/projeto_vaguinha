import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardVaga } from './card-vaga';

describe('CardVaga', () => {
  let component: CardVaga;
  let fixture: ComponentFixture<CardVaga>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardVaga],
    }).compileComponents();

    fixture = TestBed.createComponent(CardVaga);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
