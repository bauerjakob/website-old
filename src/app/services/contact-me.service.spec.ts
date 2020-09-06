/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ContactMeService } from './contact-me.service';

describe('Service: ContactMe', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ContactMeService]
    });
  });

  it('should ...', inject([ContactMeService], (service: ContactMeService) => {
    expect(service).toBeTruthy();
  }));
});
