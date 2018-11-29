import {TestBed, async} from '@angular/core/testing';
import {HttpClientTestingModule} from '@angular/common/http/testing';

import {Observable, of} from "rxjs";

import {AppComponent} from './app.component';
import {AppService} from "./service";


class MockAppService {
  getWelcomeTitle() {
    return 'Ciao ragazzi, benvenutti!!!';
  };

  retrieveListOfGreetingsInItalian(): Observable<any> {
    return of({"greetings": ["Ciao", "Salve!"]});
  }
};

describe('AppComponent', () => {

  let fixture: any;
  let comp: AppComponent;

  // Create a fake TwainService object with a `getQuote()` spy
  const appService = jasmine.createSpyObj('AppService', ['retrieveListOfGreetingsInItalian']);
  // Make the spy return a synchronous Observable with the test data
  let getGreetingsSpy = appService.retrieveListOfGreetingsInItalian.and.stub();

  beforeEach(async(() => {

    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      imports: [HttpClientTestingModule],
      providers: [
        AppComponent,
        {provide: AppService, useClass: MockAppService}
      ]
    }).compileComponents();

    // inject both the component and the dependent service.
    fixture = TestBed.createComponent(AppComponent);
    comp = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create the app', async(() => {
    expect(comp).toBeTruthy();
  }));

  it(`should have as title 'Ciao ragazzi, benvenutti!!!'`, async(() => {
    expect(comp.title).toEqual('Ciao ragazzi, benvenutti!!!');
  }));

  it('should click in the ´display greetings in italian´ button', async(() => {
    fixture.detectChanges(); // onInit()

    spyOn(comp, 'listGreetings');
    let button = fixture.debugElement.nativeElement.querySelector('button');
    button.click();
    fixture.whenStable().then(() => {
      expect(comp.listGreetings).toHaveBeenCalled();
    });
  }));
});
