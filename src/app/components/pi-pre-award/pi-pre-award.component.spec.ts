import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PiPreAwardComponent } from './pi-pre-award.component';

describe('PiPreAwardComponent', () => {
  let component: PiPreAwardComponent;
  let fixture: ComponentFixture<PiPreAwardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PiPreAwardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PiPreAwardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
