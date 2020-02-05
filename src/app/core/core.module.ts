import { NgModule, ModuleWithProviders, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MaterialModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import 'hammerjs';

import { ProgressBarComponent } from './progress-bar/progress-bar.component';
import { ProgressBarService } from './progress-bar/progress-bar.service';

import { ScrollToModule } from 'ng2-scroll-to';
import { ScrollTopService } from './scroll-top.service';

@NgModule({
  imports:      [ 
                  MaterialModule.forRoot(),
                  ScrollToModule.forRoot(),
                  BrowserAnimationsModule,
                  CommonModule,
                  RouterModule,
                ],
  declarations: [ ProgressBarComponent ],
  exports:      [ RouterModule, ProgressBarComponent ]
})

export class CoreModule {

  constructor (@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error(
        'CoreModule is already loaded. Import it in the AppModule only');
    }
  }

  static forRoot(): ModuleWithProviders {
    return {
      ngModule: CoreModule,
      providers: [ ProgressBarService, ScrollTopService ]
    };
  }
}
// providers: [ ProgressBarService, AuthGuard, requestOptionsProvider ]
/*
    http://stackoverflow.com/questions/39890722/provide-core-singleton-services-module-in-angular-2
*/
