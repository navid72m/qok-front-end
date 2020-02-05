import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';


import { AuthGuard } from '../guards/auth.guard';
import { requestOptionsProvider } from '../default-request-options.service';

import { AdvertiseComponent } from './advertise.component';
import { PublisherComponent } from './publisher/publisher.component';
import { AdvertiseListComponent } from './list/list.component';
import { UpdateAdvertiseComponent } from './update/update.component';
import { CreateAdvertiseService } from './advertise.service';
import { UpdatePublisherService } from './publisher/publisher.service';
import {  GetAdvertiseService } from './update/get_details.service';
import { UpdateAdvertiseService } from './update/update.service';
import { ListService } from './list/list.service';
import { GetPublishersService } from './services/get-publisher.service';

import { DialogResetPasswordComponent } from './list/dialog-reset-advertise/dialog-reset-advertise.component';

import { AdvertiseRoutingModule } from './advertise-routing.module';

import { AdvertiseStatisticService} from './advertise-statistic/statistic.service';
import { AdvertiseStatisticComponent } from './advertise-statistic/statistic.component';


@NgModule({
  imports: [
    SharedModule,
    AdvertiseRoutingModule,
  ],
  declarations: [ AdvertiseComponent, PublisherComponent, AdvertiseListComponent, UpdateAdvertiseComponent, DialogResetPasswordComponent ,AdvertiseStatisticComponent  ],
  providers: [ requestOptionsProvider, AuthGuard, CreateAdvertiseService, UpdatePublisherService, ListService, GetAdvertiseService, UpdateAdvertiseService, GetPublishersService ,AdvertiseStatisticService ],
   exports: [ AdvertiseComponent, UpdateAdvertiseComponent ],
   entryComponents: [
     DialogResetPasswordComponent
   ],
})
export class AdvertiseModule { }
