import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BillmanagerComponent } from './billmanager.component';

describe('BillmanagerComponent', () => {
  let component: BillmanagerComponent;
  let fixture: ComponentFixture<BillmanagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BillmanagerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BillmanagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
