import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrumWorkComponent } from './drum-work.component';

describe('DrumWorkComponent', () => {
  let component: DrumWorkComponent;
  let fixture: ComponentFixture<DrumWorkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DrumWorkComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DrumWorkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
