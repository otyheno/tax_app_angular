import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaxcalculatorComponent } from './taxcalculator.component';

describe('TaxcalculatorComponent', () => {
  let component: TaxcalculatorComponent;
  let fixture: ComponentFixture<TaxcalculatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaxcalculatorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaxcalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
