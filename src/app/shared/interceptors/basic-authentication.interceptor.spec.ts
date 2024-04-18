import { TestBed } from '@angular/core/testing';
import { BasicAuthenticationInterceptor } from './basic-authentication.interceptor';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('BasicAuthenticationInterceptor', () => {
  let interceptor: BasicAuthenticationInterceptor;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [BasicAuthenticationInterceptor]
    });
    interceptor = TestBed.inject(BasicAuthenticationInterceptor);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(interceptor).toBeTruthy();
  });
});
