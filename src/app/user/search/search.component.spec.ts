// import {
//   async, ComponentFixture, fakeAsync, inject, TestBed, tick
// } from '@angular/core/testing';

// import { By }           from '@angular/platform-browser';
// import { DebugElement } from '@angular/core';

// import {
//   click, newEvent, Router
// } from '../../testing';

// // RouterStub

// import { UserSearch }          from './search.model';
// import { UserModule }          from './user.module';
// import { UserSearchComponent } from './search.component';
// import { SearchService }       from './search.service';

// ////// RouterStub //////
// class RouterStub {
//   navigateByUrl(url: string) { return url; }
// }

// ////// Testing Vars //////
// let comp: UserSearchComponent;
// let fixture: ComponentFixture<UserSearchComponent>;
// let page: Page;

// ////// Specs //////
// describe('UserSearchComponent', () => {
//   describe('when override its provided SearchService', overrideSetup);
// });

// ////////////////////
// function overrideSetup() {
//   class SearchServiceSpy {
//     users: UserSearch[]     =  [
//         {id: 500, username: "MaLooooCH1", invitation_code: "MaLooooCH1's code"},
//         {id: 520, username: "MaLooooCH20", invitation_code: "MaLooooCH20's code"},
//     ];

//     search = jasmine.createSpy('search').and.callFake(
//       (name: string, code: string) => Promise
//         .resolve(true)
//         .then(() => { if (name == 'MaLooooCH'|| code == 'code') return this.users })
//     );
//   }

//   beforeEach( async(() => {
//     TestBed.configureTestingModule({
//       imports:   [ UserModule ],
//       providers: [
//         { provide: Router,         useClass: RouterStub},
//         // HeroDetailService at this level is IRRELEVANT!
//         // { provide: SearchService, useValue: {} }
//       ]
//     })

//     // Override component's own provider
//     .overrideComponent(UserSearchComponent, {
//       set: {
//         providers: [
//           { provide: SearchService, useClass: SearchServiceSpy }
//         ]
//       }
//     })

//     .compileComponents();
//   }));

//   let hdsSpy: SearchServiceSpy;

//   beforeEach( async(() => {
//     createComponent();
//     // get the component's injected SearchServiceSpy
//     hdsSpy = fixture.debugElement.injector.get(SearchService);
//   }));

//   xit('should have called `search` without button emitting click event', () => {
//     expect(hdsSpy.search.calls.count()).toBe(0, 'search not called yet');
//   });

//   // it('should display stub hero\'s name', () => {
//   //   expect(page.nameDisplay.textContent).toBe(hdsSpy.testHero.name);
//   // });

//   xit('should return the heroes', fakeAsync(() => {
//     const res: UserSearch[]     =  [
//         {id: 500, username: "MaLooooCH1", invitation_code: "MaLooooCH1's code"},
//         {id: 520, username: "MaLooooCH20", invitation_code: "MaLooooCH20's code"},
//     ];

//     page.nameInput.value = "MaLooooCH";
//     fixture.detectChanges();

//     click(page.nameBtn);
//     expect(hdsSpy.search.calls.count()).toBe(1, 'search called once');

//     tick(); // wait for async save to complete
//     expect(comp.users.length).toBe(2, '2 users received!')
//     expect(comp.users[0].id).toBe(res[0].id, 'a term searched and users has changed');
//     expect(comp.users[0].username).toBe(res[0].username, 'a term searched and users has changed');
//     expect(comp.users[0].invitation_code).toBe(res[0].invitation_code, 'a term searched and users has changed');
    
    
//   }));

//   xit('should return the heroes, this searched by codes', fakeAsync(() => {
//     const res: UserSearch[]     =  [
//         {id: 500, username: "MaLooooCH1", invitation_code: "MaLooooCH1's code"},
//         {id: 520, username: "MaLooooCH20", invitation_code: "MaLooooCH20's code"},
//     ];

//     page.codeInput.value = "code";
//     fixture.detectChanges();

//     click(page.codeBtn);
//     expect(hdsSpy.search.calls.count()).toBe(1, 'search called once');

//     tick(); // wait for async save to complete
//     expect(comp.users.length).toBe(2, '2 users received!')
//     expect(comp.users[0].id).toBe(res[0].id, 'a term searched and users has changed');
//     expect(comp.users[0].username).toBe(res[0].username, 'a term searched and users has changed');
//     expect(comp.users[0].invitation_code).toBe(res[0].invitation_code, 'a term searched and users has changed');
//   }));  

//   xit('should navigate', () => {
//     comp.users = [
//         {id: 500, username: "MaLooooCH1", invitation_code: "MaLooooCH1's code"},
//         {id: 520, username: "MaLooooCH20", invitation_code: "MaLooooCH20's code"},
//     ];
//     fixture.detectChanges();

//     page.resBtn = fixture.debugElement.queryAll(By.css('.results'))[0];
//     click(page.resBtn);

//     expect(page.navSpy.calls.any()).toBe(true, 'router.navigateByUrl called');

//     const navArgs = page.navSpy.calls.first().args[0];

//       // expecting to navigate to id of the component's first user
//     const id = comp.users[0].id;
//     expect(navArgs).toBe('user/view/' + id, 'should nav to the right url');
//   });  
// }


// // Helper Functions

// function createComponent() {
//   fixture = TestBed.createComponent(UserSearchComponent);
//   comp    = fixture.componentInstance;
//   page    = new Page();

//   fixture.detectChanges();
//   return fixture.whenStable().then(() => {
//     fixture.detectChanges();
//     page.addPageElements();
//   });
// }



// class Page {
//   navSpy:           jasmine.Spy;

//   nameBtn:          DebugElement;
//   codeBtn:          DebugElement;
//   resBtn:           DebugElement;
//   // nameDisplay:      HTMLElement;
//   nameInput:        HTMLInputElement;
//   codeInput:        HTMLInputElement;

//   constructor() {
//     const router     = TestBed.get(Router); // get router from root injector
//     this.navSpy      = spyOn(router, 'navigateByUrl');
//   }

//   /** Add page elements after hero arrives */
//   addPageElements() {
//     // have a hero so these elements are now in the DOM
//     const buttons    = fixture.debugElement.queryAll(By.css('.btn'));
//     this.nameBtn     = buttons[0];
//     this.codeBtn     = buttons[1];

//     // this.nameDisplay = fixture.debugElement.query(By.css('span')).nativeElement;
//     const inputs     = fixture.debugElement.queryAll(By.css('input'))
//     this.nameInput   = inputs[0].nativeElement;
//     this.codeInput   = inputs[1].nativeElement;
//   }
// }