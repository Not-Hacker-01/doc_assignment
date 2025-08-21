import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonLiveCardsComponent } from './common-live-cards.component';

describe('CommonLiveCardsComponent', () => {
  let component: CommonLiveCardsComponent;
  let fixture: ComponentFixture<CommonLiveCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommonLiveCardsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommonLiveCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
