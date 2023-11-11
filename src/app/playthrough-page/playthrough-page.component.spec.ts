import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaythroughPageComponent } from './playthrough-page.component';

describe('PlaythroughPageComponent', () => {
  let component: PlaythroughPageComponent;
  let fixture: ComponentFixture<PlaythroughPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlaythroughPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PlaythroughPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
