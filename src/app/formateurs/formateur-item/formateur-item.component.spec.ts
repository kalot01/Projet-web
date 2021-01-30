import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormateurItemComponent } from './formateur-item.component';

describe('FormateurItemComponent', () => {
  let component: FormateurItemComponent;
  let fixture: ComponentFixture<FormateurItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormateurItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormateurItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
