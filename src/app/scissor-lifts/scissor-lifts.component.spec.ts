import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScissorLiftsComponent } from './scissor-lifts.component';

describe('ScissorLiftsComponent', () => {
  let component: ScissorLiftsComponent;
  let fixture: ComponentFixture<ScissorLiftsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScissorLiftsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScissorLiftsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
