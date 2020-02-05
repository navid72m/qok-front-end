// import {
//   async, ComponentFixture, fakeAsync, inject, TestBed, tick
// } from '@angular/core/testing';

// import { By }           from '@angular/platform-browser';
// import { DebugElement } from '@angular/core';

// import {
//   ActivatedRoute, ActivatedRouteStub, click, newEvent
// } from '../../testing';

// import { Location }          from '@angular/common';
// import {LocationStrategy} from '@angular/common';

// import { UserModule }        from './user.module';
// import { UserView }          from './view.model';
// import { UserViewComponent } from './view.component';
// import { ViewService }       from './view.service';
// import { UpdateService}      from './update.service';



// ////// Testing Vars //////
// let activatedRoute: ActivatedRouteStub;
// let comp: UserViewComponent;
// let fixture: ComponentFixture<UserViewComponent>;
// let page: Page;
// let locationCalled: boolean;

// ////// Tests //////
// describe('UserViewComponent', () => {
//   beforeEach(() => {
//     activatedRoute = new ActivatedRouteStub();
//   });

//   xdescribe('when override its provided Services', overrideSetup);
// });

// ////////////////////
// function overrideSetup() {
//   class UpdateServiceSpy {
//     update = jasmine.createSpy('update').and.callFake(
//       () => Promise
//         .resolve(true)
//         .then(() => true)
//     );
//   }

//   class ViewServiceSpy {
//     user = {
//         id: 100,
//         username: "MaLooooCH",
//         invitation_code: "myCode",
//         coins: 1000,
//         created_at: new Date('1968-11-16T00:00:00'),
//         score: 1000,
//         weekly_score: 1000,
//         trophies: 1000,
//         email: "email",
//         password: "",
//         status: "ACTIVE",
//     } as UserView;

//     view = jasmine.createSpy('view').and.callFake(
//       (name: string, code: string) => Promise
//         .resolve(true)
//         .then(() => { return this.user; })
//     );
//   }

//     class LocationMock {
//         back(): void {
//             locationCalled = true;
//         }
//     }

//   // the `id` value is irrelevant because ignored by service stub
//   beforeEach(() => activatedRoute.testParams = { id: 99999 } );

//   beforeEach( async(() => {
//     TestBed.configureTestingModule({
//       imports:   [ UserModule ],
//       providers: [
//         { provide: ActivatedRoute, useValue: activatedRoute },
//         { provide: Location,       useVaue:  LocationMock }
//       ]
//     })

//     // Override component's own provider
//     .overrideComponent(UserViewComponent, {
//       set: {
//         providers: [
//           { provide: ViewService, useClass: ViewServiceSpy },
//           { provide: UpdateService, useClass: UpdateServiceSpy },
//         ]
//       }
//     })

//     .compileComponents();
//   }));

//   let viewSpy:    ViewServiceSpy;
//   let updateSpy:  UpdateServiceSpy;
  
//   beforeEach( async(() => {
//     createComponent();
//     // get the component's injected ServiceSpys
//     viewSpy   = fixture.debugElement.injector.get(ViewService);
//     updateSpy = fixture.debugElement.injector.get(UpdateService);
//   }));

//   it('should have called `view` from ViewService', () => {
//     expect(viewSpy.view.calls.count()).toBe(1, 'view called once');
//   });

//   it('should display stub user\'s name', () => {
//         expect(page.usernameDisplay.textContent).toBe(viewSpy.user.username + " details", "H2 Tag");
//         expect(+page.idDisplay.textContent).toEqual(viewSpy.user.id, "user id");
//         expect(page.invCodeDisplay.textContent).toBe(String(viewSpy.user.invitation_code), "invitation code");
//         expect(page.createTimeDisplay.textContent).toBe(String(viewSpy.user.created_at), "time created the account");
//         expect(+page.coinsInput.value).toBe(viewSpy.user.coins, "coins");
//         expect(+page.scoreInput.value).toBe(viewSpy.user.score, "user score");
//         expect(+page.weekScoreInput.value).toBe(viewSpy.user.weekly_score, "user weeky score");
//         expect(+page.trophiesInput.value).toBe(viewSpy.user.trophies, "user trophies");
//         expect(page.emailInput.value).toBe(viewSpy.user.email, "user email");
//         expect(page.statusInput.value).toBe(viewSpy.user.status, "user status");
//         //   this.passwordCheckbox =   inputs[5].nativeElement;
//         //   this.passwordInput    =   inputs[6].nativeElement;   
//   });

//   it('should activate the password input element', () => {
//         comp.valid = true;
//         fixture.detectChanges();
//         const passwordInput = fixture.debugElement.queryAll(By.css('input'))[6].nativeElement;
//         expect(passwordInput.value).toBe("", "password is empty at first");
//   });

//   it('should save stub user change', fakeAsync(() => {
//         const newEmail = "new@Email";
//         page.emailInput.value = newEmail;
//         fixture.detectChanges();
//         expect(page.emailInput.value).toBe(newEmail, "new user email");

//         click(page.saveBtn);
//         expect(updateSpy.update.calls.count()).toBe(1, 'update called once');

//         tick();
//         expect(comp.updated).toBe(true, "after tick called");
//   }));

//   it('back button should work', () => {
//         // we should figure out a way to mock the Location properly
//         click(page.backBtn);    
//         expect(locationCalled).toBe(true, "back button working properly")
//   });
// }


// /////////// Helpers /////

// /** Create the UserViewComponent, initialize it, set test variables  */
// function createComponent() {
//   fixture = TestBed.createComponent(UserViewComponent);
//   comp    = fixture.componentInstance;
//   page    = new Page();

//   // 1st change detection triggers ngOnInit which gets a user
//   fixture.detectChanges();
//   return fixture.whenStable().then(() => {
//     // 2nd change detection displays the async-fetched user
//     fixture.detectChanges();
//     page.addPageElements();
//   });
// }

// class Page {
//   goBackSpy:        jasmine.Spy;
//   backSpy:          jasmine.Spy;
                    
//   // buttons        
//   saveBtn:          DebugElement;
//   backBtn:          DebugElement;

//   // Info
//   usernameDisplay:    HTMLElement;
//   idDisplay:          HTMLElement;
//   username2Display:   HTMLElement;
//   invCodeDisplay:     HTMLElement;
//   createTimeDisplay:  HTMLElement;
  
//   // Inputs
//   coinsInput:       HTMLInputElement;
//   scoreInput:       HTMLInputElement;
//   weekScoreInput:   HTMLInputElement;
//   trophiesInput:    HTMLInputElement;
//   emailInput:       HTMLInputElement;
//   passwordCheckbox: HTMLInputElement;
//   passwordInput:    HTMLInputElement;
//   statusInput:      HTMLSelectElement;


//   constructor() {
//     this.goBackSpy   = spyOn(comp, 'goBack').and.callFake(() => {
//         locationCalled = true;
//     });
//   }

//   /* Add page elements after userview data arrives */
//   addPageElements() {
//     if (comp.userview) {
//       // have information about a user, so these elements are now in the DOM
//       const buttons    = fixture.debugElement.queryAll(By.css('button'));
//       this.saveBtn     = buttons[0];
//       this.backBtn     = buttons[1];
//       // getting display (unchangeable elements)
//       const displays = fixture.debugElement.queryAll(By.css('.userInfo'));
//       this.usernameDisplay   = displays[0].nativeElement;
//       this.idDisplay         = displays[1].nativeElement;
//       this.username2Display  = displays[2].nativeElement;
//       this.invCodeDisplay    = displays[3].nativeElement;
//       this.createTimeDisplay = displays[4].nativeElement;

//       // getting inputs
//       const inputs          =   fixture.debugElement.queryAll(By.css('input'));
//       this.coinsInput       =   inputs[0].nativeElement;
//       this.scoreInput       =   inputs[1].nativeElement;
//       this.weekScoreInput   =   inputs[2].nativeElement;
//       this.trophiesInput    =   inputs[3].nativeElement;
//       this.emailInput       =   inputs[4].nativeElement;
//       this.passwordCheckbox =   inputs[5].nativeElement;
//     //   this.passwordInput    =   inputs[6].nativeElement;   
//       this.statusInput      =   fixture.debugElement.query(By.css('select')).nativeElement;
//     }
//   }
// }


// /*
// Copyright 2016 Google Inc. All Rights Reserved.
// Use of this source code is governed by an MIT-style license that
// can be found in the LICENSE file at http://angular.io/license
// */