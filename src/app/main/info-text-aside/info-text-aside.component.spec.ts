import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoTextAsideComponent } from './info-text-aside.component';

describe('InfoTextAsideComponent', () => {
  let component: InfoTextAsideComponent;
  let fixture: ComponentFixture<InfoTextAsideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InfoTextAsideComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfoTextAsideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
