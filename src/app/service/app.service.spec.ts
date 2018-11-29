import {TestBed, getTestBed, async} from '@angular/core/testing';
import {HttpClientTestingModule} from '@angular/common/http/testing';

import {AppService} from './app.service';

describe('AppService', () => {
  let injector: TestBed;
  let service: AppService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [AppService]
    });

    injector = getTestBed();
    service = injector.get(AppService);
  });


  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('#getWelcomeTitle should return welcome title value', () => {
    expect(service.getWelcomeTitle()).toBe('Ciao ragazzi, benvenutti!!');
  });

  it('#retrieveListOfGreetingsInItalian should return a list of greetings values', async(() => {
    const spy = spyOn(service, 'retrieveListOfGreetingsInItalian').and.returnValue({});
    expect(service.retrieveListOfGreetingsInItalian()).toBeTruthy()
    expect(service.retrieveListOfGreetingsInItalian).toHaveBeenCalled();
  }));
});


