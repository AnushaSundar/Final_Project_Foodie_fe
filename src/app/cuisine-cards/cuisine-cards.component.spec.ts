import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuisineCardsComponent } from './cuisine-cards.component';

describe('CuisineCardsComponent', () => {
  let component: CuisineCardsComponent;
  let fixture: ComponentFixture<CuisineCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CuisineCardsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CuisineCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
