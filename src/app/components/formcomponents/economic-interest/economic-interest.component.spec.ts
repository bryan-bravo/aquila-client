import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EconomicInterestComponent } from './economic-interest.component';

describe('EconomicInterestComponent', () => {
  let component: EconomicInterestComponent;
  let fixture: ComponentFixture<EconomicInterestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EconomicInterestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EconomicInterestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
