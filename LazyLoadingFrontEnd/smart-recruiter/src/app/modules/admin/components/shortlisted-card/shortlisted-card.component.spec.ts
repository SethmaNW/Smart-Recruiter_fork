import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShortlistedCardComponent } from './shortlisted-card.component';

describe('ShortlistedCardComponent', () => {
  let component: ShortlistedCardComponent;
  let fixture: ComponentFixture<ShortlistedCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShortlistedCardComponent]
    });
    fixture = TestBed.createComponent(ShortlistedCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
