import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoriaComponent } from './historia.component';

describe('HistoriaComponent', () => {
  let component: HistoriaComponent;
  let fixture: ComponentFixture<HistoriaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HistoriaComponent]
    });
    fixture = TestBed.createComponent(HistoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
