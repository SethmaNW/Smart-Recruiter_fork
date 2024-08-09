import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserOpeningComponent } from './user-opening.component';

describe('UserOpeningComponent', () => {
  let component: UserOpeningComponent;
  let fixture: ComponentFixture<UserOpeningComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserOpeningComponent]
    });
    fixture = TestBed.createComponent(UserOpeningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
