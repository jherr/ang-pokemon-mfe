import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonCarouselComponent } from './pokemon-carousel.component';

describe('PokemonCarouselComponent', () => {
  let component: PokemonCarouselComponent;
  let fixture: ComponentFixture<PokemonCarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokemonCarouselComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
