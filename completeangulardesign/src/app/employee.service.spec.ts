import { TestBed } from '@angular/core/testing';

import { Employee.Service } from './employee.service';

describe('Employee.Service', () => {
  let service: Employee.Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Employee.Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
