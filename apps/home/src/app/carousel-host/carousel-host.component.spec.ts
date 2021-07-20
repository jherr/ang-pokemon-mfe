import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselHostComponent } from './carousel-host.component';

describe('CarouselHostComponent', () => {
  let component: CarouselHostComponent;
  let fixture: ComponentFixture<CarouselHostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarouselHostComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarouselHostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
