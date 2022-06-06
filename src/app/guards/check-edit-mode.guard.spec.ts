import { TestBed } from '@angular/core/testing';

import { CheckEditModeGuard } from './check-edit-mode.guard';

describe('CheckEditModeGuard', () => {
  let guard: CheckEditModeGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(CheckEditModeGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
