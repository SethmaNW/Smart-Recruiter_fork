import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicantTableComponent } from './applicant-table.component';

describe('ApplicantTableComponent', () => {
  let component: ApplicantTableComponent;
  let fixture: ComponentFixture<ApplicantTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ApplicantTableComponent]
    });
    fixture = TestBed.createComponent(ApplicantTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
