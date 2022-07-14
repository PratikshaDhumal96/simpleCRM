import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CutsomerComponent } from './cutsomer.component';

describe('CutsomerComponent', () => {
  let component: CutsomerComponent;
  let fixture: ComponentFixture<CutsomerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CutsomerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CutsomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
