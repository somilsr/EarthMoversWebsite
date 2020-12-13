import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompactionEquipmentComponent } from './compaction-equipment.component';

describe('CompactionEquipmentComponent', () => {
  let component: CompactionEquipmentComponent;
  let fixture: ComponentFixture<CompactionEquipmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompactionEquipmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompactionEquipmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
