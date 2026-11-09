import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TarjetahistorialComponent } from './tarjetahistorial.component';

describe('TarjetahistorialComponent', () => {
  let component: TarjetahistorialComponent;
  let fixture: ComponentFixture<TarjetahistorialComponent>;

  beforeEach(() => {
    fixture = TestBed.createComponent(TarjetahistorialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
