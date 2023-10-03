import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarraProgresoComponent } from './barra-progreso.component';

describe('BarraProgresoComponent', () => {
  let component: BarraProgresoComponent;
  let fixture: ComponentFixture<BarraProgresoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BarraProgresoComponent]
    });
    fixture = TestBed.createComponent(BarraProgresoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
