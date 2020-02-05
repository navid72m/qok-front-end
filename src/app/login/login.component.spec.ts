import {
  async, ComponentFixture, fakeAsync, inject, TestBed, tick
} from '@angular/core/testing';

import { By }           from '@angular/platform-browser';
import { DebugElement, EventEmitter } from '@angular/core';

import {
  click, newEvent, Router
} from '../../testing';

import 'hammerjs';
import { MaterialModule } from '@angular/material';

import { LoginModule }          from './login.module';
import { LoginComponent }       from './login.component';
import { LoginService }         from './login.service';

// guard packages
import { AuthenticatedUser }    from '../guards/auth';
import { AuthGuard }            from '../guards/auth.guard';

////// RouterStub //////
class RouterStub {
  navigateByUrl(url: string) { return url; }
}

////// Testing Vars //////
let comp:    LoginComponent;
let fixture: ComponentFixture<LoginComponent>;
let page:    Page;

////// Specs //////
describe('LoginComponent', () => {
  describe('when override its provided LoginService', overrideSetup);
});

////////////////////
function overrideSetup() {
  class LoginServiceSpy {
    authUser = { 
        id: 1,
        username: "MaLooooCH",
        status: "ACTIVE",
        role: "CRM"
    } as AuthenticatedUser;

    authenticate = jasmine.createSpy('authenticate').and.callFake(
      (username: string, password: string) => Promise
        .resolve(true)
        .then(() => { 
            if (username === 'MaLooooCH' && password === 'password') {
                return this.authUser;
            } else {
                return null;
            }
         })
    );
  }

    class AuthGuardSpy {
        // onAuthenticatedEvent: EventEmitter<Boolean> = new EventEmitter<Boolean>();

        // isAuthenticated = jasmine.createSpy('isAuthenticated').and.returnValue(false);
        logout = jasmine.createSpy("logout").and.callFake(() => {});
        login = jasmine.createSpy("login").and.callFake(() => {});
    }

  beforeEach( async(() => {
    TestBed.configureTestingModule({
      imports:   [ LoginModule ],
      providers: [
        { provide: Router, useClass: RouterStub},
      ]
    })

    // Override component's own provider
    .overrideComponent(LoginComponent, {
      set: {
        providers: [
          { provide: LoginService, useClass: LoginServiceSpy },
          { provide: AuthGuard, useClass: AuthGuardSpy }
        ]
      }
    })

    .compileComponents();
  }));

  let loginSpy: LoginServiceSpy;
  let authSpy:  AuthGuardSpy;

  beforeEach( async(() => {
    createComponent();
    // get the component's injected SearchServiceSpy
    loginSpy = fixture.debugElement.injector.get(LoginService);
    authSpy  = fixture.debugElement.injector.get(AuthGuard);
  }));

  it('should have called `search` without button emitting click event', () => {
    expect(loginSpy.authenticate.calls.count()).toBe(0, 'authenticate not called yet');

    expect(authSpy.logout.calls.count()).toBe(1, "Should have called logout onInit");
    expect(authSpy.login.calls.count()).toBe(0,  "Should not have called logout onInit");
  });

  it('should login successfully', fakeAsync(() => {
    const loginUsername = 'MaLooooCH';
    const loginPassword = 'password';

    page.usernameInput.value = loginUsername;
    page.passwordInput.value = loginPassword;
    fixture.detectChanges();

    click(page.loginBtn);
    expect(loginSpy.authenticate.calls.count()).toBe(1, 'authenticate called once');

    tick(); // wait for async save to complete
    fixture.detectChanges();
    expect(page.navSpy.calls.count()).toBe(1, 'authenticate called once');
    expect(authSpy.login.calls.count()).toBe(1, 'should call login');

    const navArgs = page.navSpy.calls.first().args[0];
    expect(navArgs).toBe('/dashboard', 'should nav to the right url');
    expect(comp.showErr).toBe(false, "Should have no error");
  }));

  it('should display error message in case username or password is incorrect', fakeAsync(() => {
    const loginUsername = 'not MaLooooCH';
    const loginPassword = 'not password';

    page.usernameInput.value = loginUsername;
    page.passwordInput.value = loginPassword;
    fixture.detectChanges();

    click(page.loginBtn);
    expect(loginSpy.authenticate.calls.count()).toBe(1, 'authenticate called once');

    tick(); // wait for async save to complete
    fixture.detectChanges();
    expect(page.navSpy.calls.count()).toBe(0, 'authenticate called once');
    expect(authSpy.login.calls.count()).toBe(0, 'should not call login');

    expect(comp.showErr).toBe(true, 'display error variable is set');
    expect(fixture.debugElement.query(By.css('md-card-title')).nativeElement.textContent)
                               .toBe("Error" ,"displaying error title in the template");
  }));   
}


// Helper Functions

function createComponent() {
  fixture = TestBed.createComponent(LoginComponent);
  comp    = fixture.componentInstance;
  page    = new Page();

  fixture.detectChanges();
  return fixture.whenStable().then(() => {
    fixture.detectChanges();
    page.addPageElements();
  });
}



class Page {
  navSpy:               jasmine.Spy;

  loginBtn:             DebugElement;
  
  usernameInput:        HTMLInputElement;
  passwordInput:        HTMLInputElement;

  constructor() {
    const router         = TestBed.get(Router); // get router from root injector
    this.navSpy          = spyOn(router, 'navigateByUrl');
  }

  /** Add page elements after logout operation is performed */
  addPageElements() {
    this.loginBtn        = fixture.debugElement.query(By.css('button'));

    const inputs         = fixture.debugElement.queryAll(By.css('input'))
    this.usernameInput   = inputs[0].nativeElement;
    this.passwordInput   = inputs[1].nativeElement;
  }
}