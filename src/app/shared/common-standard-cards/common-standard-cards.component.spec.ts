import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonStandardCardsComponent } from './common-standard-cards.component';

describe('CommonStandardCardsComponent', () => {
  let component: CommonStandardCardsComponent;
  let fixture: ComponentFixture<CommonStandardCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommonStandardCardsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommonStandardCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
