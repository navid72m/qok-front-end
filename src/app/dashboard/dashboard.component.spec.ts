import {
  async, ComponentFixture, fakeAsync, inject, TestBed, tick
} from '@angular/core/testing';

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {
  click, newEvent, Router
} from '../../testing';

import { DashboardModule }          from './dashboard.module';
import { DashboardComponent }       from './dashboard.component';

// guard packages
import { AuthenticatedUser }    from '../guards/auth';
import { AuthGuard }            from '../guards/auth.guard';


////// Testing Vars //////
let comp:    DashboardComponent;
let fixture: ComponentFixture<DashboardComponent>;

////// Specs //////
describe('DashboardComponent', () => {
  describe('when override its provided DashboardService', overrideSetup);
});

////////////////////
function overrideSetup() {

    class AuthGuardSpy {
        authUser = { 
            id: 1,
            username: "MaLooooCH",
            status: "ACTIVE",
            role: "CRM"
        } as AuthenticatedUser;

        getUser = jasmine.createSpy("getUser").and.returnValue(this.authUser);
    }

  beforeEach( async(() => {
    TestBed.configureTestingModule({
      imports:   [ DashboardModule ],
    })

    // Override component's own provider
    .overrideComponent(DashboardComponent, {
      set: {
        providers: [
          { provide: AuthGuard, useClass: AuthGuardSpy }
        ]
      }
    })

    .compileComponents();
  }));

  let authSpy:  AuthGuardSpy;

  beforeEach( async(() => {
    fixture = TestBed.createComponent(DashboardComponent);
    comp    = fixture.componentInstance;
  }));
  
  beforeEach( () => {
    authSpy  = fixture.debugElement.injector.get(AuthGuard);
  });

  it('should have called `getUser`', () => {
    fixture.detectChanges();
    expect(authSpy.getUser.calls.count()).toBe(1, "getUser Called once in ngOnInit");
    
    expect(fixture.debugElement.query(By.css("md-card-subtitle")).nativeElement.textContent)
        .toBe(authSpy.authUser.username, "username bound properly");
  });

  it('Unknown user', () => {
    authSpy.getUser = jasmine.createSpy("getUser").and.returnValue(null);

    fixture.detectChanges();
    expect(authSpy.getUser.calls.count()).toBe(1, "getUser Called once in ngOnInit");
    
    expect(fixture.debugElement.query(By.css("md-card-subtitle")).nativeElement.textContent)
        .toBe("Unknown", "should display Unknow User");
  });
}