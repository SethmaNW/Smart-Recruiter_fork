import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidatePersonalProfileComponent } from './candidate-personal-profile.component';

describe('CandidatePersonalProfileComponent', () => {
  let component: CandidatePersonalProfileComponent;
  let fixture: ComponentFixture<CandidatePersonalProfileComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CandidatePersonalProfileComponent]
    });
    fixture = TestBed.createComponent(CandidatePersonalProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
