import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuisineEditComponent } from './cuisine-edit.component';

describe('CuisineEditComponent', () => {
  let component: CuisineEditComponent;
  let fixture: ComponentFixture<CuisineEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CuisineEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CuisineEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
