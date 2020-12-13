import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConstructionSiteServicesComponent } from './construction-site-services.component';

describe('ConstructionSiteServicesComponent', () => {
  let component: ConstructionSiteServicesComponent;
  let fixture: ComponentFixture<ConstructionSiteServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConstructionSiteServicesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConstructionSiteServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
