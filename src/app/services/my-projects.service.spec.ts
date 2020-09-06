/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { MyProjectsService } from './my-projects.service';

describe('Service: MyProjects', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MyProjectsService]
    });
  });

  it('should ...', inject([MyProjectsService], (service: MyProjectsService) => {
    expect(service).toBeTruthy();
  }));
});
