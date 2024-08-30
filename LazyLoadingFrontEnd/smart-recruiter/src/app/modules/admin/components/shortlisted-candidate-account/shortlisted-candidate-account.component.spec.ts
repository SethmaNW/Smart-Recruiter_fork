import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShortlistedCandidateAccountComponent } from './shortlisted-candidate-account.component';

describe('ShortlistedCandidateAccountComponent', () => {
  let component: ShortlistedCandidateAccountComponent;
  let fixture: ComponentFixture<ShortlistedCandidateAccountComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShortlistedCandidateAccountComponent]
    });
    fixture = TestBed.createComponent(ShortlistedCandidateAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
