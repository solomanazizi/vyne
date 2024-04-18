import { TestBed } from '@angular/core/testing';
import { DateUtilsService } from './date-utils.service';

describe('DateUtilsService', () => {
  let service: DateUtilsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DateUtilsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should convert date string to DD/MM/YYYY format', () => {
    //Todo add more test cases when method can convert additional formats
    const testCases = [
      {input: '2024-01-01T00:00:00.000', result: '01/01/2024'},
    ];

    testCases.forEach(testCase => {
      expect(service.convertToDayMonthYear(testCase.input)).toBe(testCase.result);
    });
  });
});
