import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToggleInfoCardComponent } from './toggle-info-card.component';

describe('ToggleInfoCardComponent', () => {
  let component: ToggleInfoCardComponent;
  let fixture: ComponentFixture<ToggleInfoCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ToggleInfoCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ToggleInfoCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
