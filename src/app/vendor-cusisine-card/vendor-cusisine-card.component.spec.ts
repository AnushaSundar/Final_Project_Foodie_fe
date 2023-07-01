import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VendorCusisineCardComponent } from './vendor-cusisine-card.component';

describe('VendorCusisineCardComponent', () => {
  let component: VendorCusisineCardComponent;
  let fixture: ComponentFixture<VendorCusisineCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VendorCusisineCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VendorCusisineCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
