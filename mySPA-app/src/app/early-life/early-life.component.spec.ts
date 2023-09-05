import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EarlyLifeComponent } from './early-life.component';

describe('EarlyLifeComponent', () => {
  let component: EarlyLifeComponent;
  let fixture: ComponentFixture<EarlyLifeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EarlyLifeComponent]
    });
    fixture = TestBed.createComponent(EarlyLifeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
