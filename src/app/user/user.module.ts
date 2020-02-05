import { NgModule }     from '@angular/core';

import { SharedModule } from '../shared/shared.module';

import { requestOptionsProvider } from '../default-request-options.service';

import { UserSearchComponent } from './search/search.component';
import { SearchService } from './search/search.service';
import { ListUserComponent } from './search/list-user/list-user.component';
import { UpdateMultipleService } from './search/list-user/list-user.service';

import { UserViewComponent } from './update/view.component';
import { ViewService }       from './update/view.service';
import { UpdateService}      from './update/update.service';

import { StatisticsViewComponent } from './update/statistics/statistics-view.component';
import { UpdatePercentService } from './update/statistics/update-percent.service';
import { GetStatsService } from './update/services/statistics-getstats.service';

import { GameStatisticsComponent } from './update/gamestatistics/gamestatistics.component';
import { GetUserStatsService } from './update/services/statistics-getuserstat.service';
import { UpdateGamePercentService } from './update/gamestatistics/update-gamepercent.service';

import { FriendsViewComponent } from './update/friends/friends-view.component';
import { FriendsService }    from './update/services/friends.service';

import { PaymentsViewComponent } from './update/payment/payments-view.component';
import { PaymentsService }   from './update/services/payments.service';

import { FraudsViewComponent } from './update/fraud/fraud.component';
import { FraudsService }   from './update/services/frauds.service';

import { CreateUserComponent } from './create/create.component';
import { CreateService } from './create/create.service';

import { LockDeviceService } from './update/services/lock-device.service';

import { DialogComponent }   from './update/dialog-search/dialog-search.component';
import { DialogResetPasswordComponent } from './update/dialog-reset-password/dialog-reset-password.component';

import { UserRoutingModule } from './user-routing.module';

import 'hammerjs';
import { NotificationsService } from 'angular2-notifications/index';

@NgModule({
  imports: [
    UserRoutingModule,
    SharedModule,
  ],
  declarations: [
    UserSearchComponent,
    ListUserComponent,
    UserViewComponent,
    CreateUserComponent,
    DialogComponent,
    DialogResetPasswordComponent,
    StatisticsViewComponent,
    GameStatisticsComponent,
    FriendsViewComponent,
    PaymentsViewComponent,
      FraudsViewComponent,
  ],
  providers: [
      NotificationsService,
    requestOptionsProvider,
    SearchService,
    UpdateMultipleService,
    ViewService,
    UpdateService,
    CreateService,
    FriendsService,
    PaymentsService,
    FraudsService ,
    GetStatsService,
    GetUserStatsService,
    UpdatePercentService,
    UpdateGamePercentService,
    DialogComponent,
    DialogResetPasswordComponent,
    LockDeviceService,
  ],
  entryComponents: [
    DialogComponent,
    DialogResetPasswordComponent
  ],
})
export class UserModule { }
