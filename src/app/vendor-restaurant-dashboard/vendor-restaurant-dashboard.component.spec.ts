import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VendorRestaurantDashboardComponent } from './vendor-restaurant-dashboard.component';

describe('VendorRestaurantDashboardComponent', () => {
  let component: VendorRestaurantDashboardComponent;
  let fixture: ComponentFixture<VendorRestaurantDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VendorRestaurantDashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VendorRestaurantDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
