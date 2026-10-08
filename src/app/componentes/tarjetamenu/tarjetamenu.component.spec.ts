import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TarjetamenuComponent } from './tarjetamenu.component';

describe('TarjetamenuComponent', () => {
  let component: TarjetamenuComponent;
  let fixture: ComponentFixture<TarjetamenuComponent>;

  beforeEach(() => {
    fixture = TestBed.createComponent(TarjetamenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
