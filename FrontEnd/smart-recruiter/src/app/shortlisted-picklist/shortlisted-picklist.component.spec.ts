import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShortlistedPicklistComponent } from './shortlisted-picklist.component';

describe('ShortlistedPicklistComponent', () => {
  let component: ShortlistedPicklistComponent;
  let fixture: ComponentFixture<ShortlistedPicklistComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShortlistedPicklistComponent]
    });
    fixture = TestBed.createComponent(ShortlistedPicklistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
