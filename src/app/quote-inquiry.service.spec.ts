import { TestBed } from '@angular/core/testing';

import { QuoteInquiryService } from './quote-inquiry.service';

describe('QuoteInquiryService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: QuoteInquiryService = TestBed.get(QuoteInquiryService);
    expect(service).toBeTruthy();
  });
});
