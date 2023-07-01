import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VendorRestaurantCardComponent } from './vendor-restaurant-card.component';

describe('VendorRestaurantCardComponent', () => {
  let component: VendorRestaurantCardComponent;
  let fixture: ComponentFixture<VendorRestaurantCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VendorRestaurantCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VendorRestaurantCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
