import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RechercheSessionComponent } from './recherche-session.component';

describe('RechercheSessionComponent', () => {
  let component: RechercheSessionComponent;
  let fixture: ComponentFixture<RechercheSessionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RechercheSessionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RechercheSessionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
