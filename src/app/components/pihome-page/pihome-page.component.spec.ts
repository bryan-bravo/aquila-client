import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PihomePageComponent } from './pihome-page.component';

describe('PihomePageComponent', () => {
  let component: PihomePageComponent;
  let fixture: ComponentFixture<PihomePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PihomePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PihomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
