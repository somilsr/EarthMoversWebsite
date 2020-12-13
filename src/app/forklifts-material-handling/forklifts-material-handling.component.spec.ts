import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForkliftsMaterialHandlingComponent } from './forklifts-material-handling.component';

describe('ForkliftsMaterialHandlingComponent', () => {
  let component: ForkliftsMaterialHandlingComponent;
  let fixture: ComponentFixture<ForkliftsMaterialHandlingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForkliftsMaterialHandlingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ForkliftsMaterialHandlingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
