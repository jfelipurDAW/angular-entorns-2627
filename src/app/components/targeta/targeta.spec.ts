import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Targeta } from './targeta';

describe('Targeta', () => {
  let component: Targeta;
  let fixture: ComponentFixture<Targeta>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Targeta],
    }).compileComponents();

    fixture = TestBed.createComponent(Targeta);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
