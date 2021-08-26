import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SummaryTitleComponent } from './summary-title.component';

describe('SummaryTitleComponent', () => {
  let component: SummaryTitleComponent;
  let fixture: ComponentFixture<SummaryTitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SummaryTitleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SummaryTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
