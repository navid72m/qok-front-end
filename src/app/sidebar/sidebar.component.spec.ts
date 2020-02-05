/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement, NO_ERRORS_SCHEMA } from '@angular/core';
import { MaterialModule } from '@angular/material';

import { SidebarComponent } from './sidebar.component';
import { MenuItem } from './menu_item.model';
import { MENU_ITEMS } from './menu_items.model';
import { RouterLinkStubDirective } from '../../testing';

import 'hammerjs';

let component: SidebarComponent;
let fixture: ComponentFixture<SidebarComponent>;

describe('testing routerLink with NO_ERRORS_SCHEMA', () => {
  

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MaterialModule.forRoot()
      ],
      declarations: [ SidebarComponent, RouterLinkStubDirective ],
      schemas:      [ NO_ERRORS_SCHEMA ]
    })
    .compileComponents()
    .then(() => {
      fixture      = TestBed.createComponent(SidebarComponent);
      component    = fixture.componentInstance;
      fixture.detectChanges();
    });
  }));

  tests()
});


function tests() {
  let links: RouterLinkStubDirective[];
  let linkDes: DebugElement[];

  beforeEach(() => {

    // find DebugElements with an attached RouterLinkStubDirective
    linkDes = fixture.debugElement
      .queryAll(By.directive(RouterLinkStubDirective));

    // get the attached link directive instances using the DebugElement injectors
    links = linkDes
      .map(de => de.injector.get(RouterLinkStubDirective) as RouterLinkStubDirective);
  });

  // it('can instantiate it', () => {
  //   expect(component).not.toBeNull();
  // });

  xit('should create', () => {
    expect(component).toBeTruthy();
  });

  xit('should have 3 elements', () => {
    const items = fixture.debugElement.queryAll(By.css('md-list-item'));
    expect(items.length).toBe(3, 'should display 3 menu items');
  });

  xit('can get RouterLinks from template', () => {
    expect(links.length).toBe(3, 'should have 3 links');
    expect(links[0].linkParams).toBe('/login', '1st link should go to Login');
    expect(links[1].linkParams).toBe('/user/search', '1st link should go to UserSearch');
    expect(links[2].linkParams).toBe('/question/prereview', '1st link should go to Questions');
  });

  xit('can click Heroes link in template', () => {
    const heroesLinkDe = linkDes[1];
    const heroesLink = links[1];

    expect(heroesLink.navigatedTo).toBeNull('link should not have navigated yet');

    heroesLinkDe.triggerEventHandler('click', null);
    fixture.detectChanges();

    expect(heroesLink.navigatedTo).toBe('/user/search');
  });
}

