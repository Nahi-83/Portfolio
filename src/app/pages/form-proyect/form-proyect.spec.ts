import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormProyect } from './form-proyect';

describe('FormProyect', () => {
  let component: FormProyect;
  let fixture: ComponentFixture<FormProyect>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormProyect],
    }).compileComponents();

    fixture = TestBed.createComponent(FormProyect);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
