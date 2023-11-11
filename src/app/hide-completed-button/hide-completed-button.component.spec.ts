import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HideCompletedButtonComponent } from './hide-completed-button.component';

describe('HideCompletedButtonComponent', () => {
  let component: HideCompletedButtonComponent;
  let fixture: ComponentFixture<HideCompletedButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HideCompletedButtonComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(HideCompletedButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
