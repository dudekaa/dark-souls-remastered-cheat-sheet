import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountingBadgeComponent } from './counting-badge.component';

describe('CountingBadgeComponent', () => {
  let component: CountingBadgeComponent;
  let fixture: ComponentFixture<CountingBadgeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CountingBadgeComponent],
    })
      .compileComponents();

    fixture = TestBed.createComponent(CountingBadgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
