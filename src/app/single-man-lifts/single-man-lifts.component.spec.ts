import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleManLiftsComponent } from './single-man-lifts.component';

describe('SingleManLiftsComponent', () => {
  let component: SingleManLiftsComponent;
  let fixture: ComponentFixture<SingleManLiftsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleManLiftsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleManLiftsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
