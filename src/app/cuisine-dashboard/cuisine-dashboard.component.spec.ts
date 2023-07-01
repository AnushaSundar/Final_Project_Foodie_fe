import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuisineDashboardComponent } from './cuisine-dashboard.component';

describe('CuisineDashboardComponent', () => {
  let component: CuisineDashboardComponent;
  let fixture: ComponentFixture<CuisineDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CuisineDashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CuisineDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
