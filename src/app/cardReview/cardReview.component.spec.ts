import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardReviewComponent } from './cardReview.component';

describe('CardDetailsComponent', () => {
  let component: CardReviewComponent;
  let fixture: ComponentFixture<CardReviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardReviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
