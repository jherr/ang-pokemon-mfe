import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtensionHostComponent } from './extension-host.component';

describe('CarouselHostComponent', () => {
  let component: ExtensionHostComponent;
  let fixture: ComponentFixture<ExtensionHostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExtensionHostComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExtensionHostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
