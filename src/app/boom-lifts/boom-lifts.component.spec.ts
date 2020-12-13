import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoomLiftsComponent } from './boom-lifts.component';

describe('BoomLiftsComponent', () => {
  let component: BoomLiftsComponent;
  let fixture: ComponentFixture<BoomLiftsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoomLiftsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BoomLiftsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
