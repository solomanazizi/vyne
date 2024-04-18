import { TestBed } from '@angular/core/testing';
import { CustomErrorHandler } from './custom-error-handler.service';

describe('CustomErrorHandlerService', () => {
  let service: CustomErrorHandler;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CustomErrorHandler]
    });
    service = TestBed.inject(CustomErrorHandler);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should throw a warning', () => {
    spyOn(console, 'warn');
    const mockWarning = {type: 'warn', message: 'test message'};

    service.handleError(mockWarning);

    expect(console.warn).toHaveBeenCalledWith('Warning', mockWarning.message);
  })
});
