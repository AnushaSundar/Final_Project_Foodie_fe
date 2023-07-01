import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VendorCusisineDashboardComponent } from './vendor-cusisine-dashboard.component';

describe('VendorCusisineDashboardComponent', () => {
  let component: VendorCusisineDashboardComponent;
  let fixture: ComponentFixture<VendorCusisineDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VendorCusisineDashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VendorCusisineDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
