import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkpComponent } from './skp.component';

describe('SkpComponent', () => {
  let component: SkpComponent;
  let fixture: ComponentFixture<SkpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SkpComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SkpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
