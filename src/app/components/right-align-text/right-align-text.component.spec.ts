import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RightAlignTextComponent } from './right-align-text.component';

describe('RightAlignTextComponent', () => {
  let component: RightAlignTextComponent;
  let fixture: ComponentFixture<RightAlignTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RightAlignTextComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RightAlignTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
