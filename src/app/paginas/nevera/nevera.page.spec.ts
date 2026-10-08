import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NeveraPage } from './nevera.page';

describe('NeveraPage', () => {
  let component: NeveraPage;
  let fixture: ComponentFixture<NeveraPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(NeveraPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
