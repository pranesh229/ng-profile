/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ShortProfileService } from './short-profile.service';

describe('Service: ShortProfile', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ShortProfileService]
    });
  });

  it('should ...', inject([ShortProfileService], (service: ShortProfileService) => {
    expect(service).toBeTruthy();
  }));
});
