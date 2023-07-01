import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoResturantComponent } from './info-resturant.component';

describe('InfoResturantComponent', () => {
  let component: InfoResturantComponent;
  let fixture: ComponentFixture<InfoResturantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoResturantComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfoResturantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
