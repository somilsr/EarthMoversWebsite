import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EarthmovingEquipmentComponent } from './earthmoving-equipment.component';

describe('EarthmovingEquipmentComponent', () => {
  let component: EarthmovingEquipmentComponent;
  let fixture: ComponentFixture<EarthmovingEquipmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EarthmovingEquipmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EarthmovingEquipmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
