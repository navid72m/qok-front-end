import { NgModule }     from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { MyDatePickerModule } from 'mydatepicker';

import { requestOptionsProvider } from '../default-request-options.service';

import { ClanStatRoutingModule } from './clan-stat-routing.module';
import { AuthGuard } from '../guards/auth.guard';

import { ClanStatViewComponent } from './clan-stat-view/clan-stat-view.component';
import { ClanStatViewService } from './clan-stat-view/clan-stat-view.service';

import 'hammerjs';

@NgModule({
  imports: [
    ClanStatRoutingModule,
    SharedModule,
    MyDatePickerModule,
  ],
  declarations: [
    ClanStatViewComponent,
  ],
  providers: [
    requestOptionsProvider,
    AuthGuard,
    ClanStatViewService,
  ],
})
export class ClanStatModule { }
