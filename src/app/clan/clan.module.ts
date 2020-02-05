import { NgModule }     from '@angular/core';

import { SharedModule } from '../shared/shared.module';

import { AuthGuard }              from '../guards/auth.guard';
import { requestOptionsProvider } from '../default-request-options.service';
import { UpdateMultipleService } from './view/list-user/clan-list-user.service';
import { ListUserComponent } from './view/list-user/clan-list-user.component';
import { ViewService } from './view/view.service';
import { ClanRoutingModule } from './clan-routing.module';
import { ClanViewComponent }    from './view/view.component';
import { UpdateService }    from './update.service';

import 'hammerjs';

@NgModule({
  imports: [
    ClanRoutingModule,
    SharedModule

  ],
  declarations: [
    ClanViewComponent,
      ListUserComponent
    // UserSearchComponent,
    // ListUserComponent,
    // UserViewComponent,
    // CreateUserComponent,
    // DialogComponent,
    // DialogResetPasswordComponent,
    // StatisticsViewComponent,
    // GameStatisticsComponent,
    // FriendsViewComponent,
    // PaymentsViewComponent
  ],
  providers: [
    ViewService,
    requestOptionsProvider,
    // SearchService,
    UpdateMultipleService,
    // ViewService,
    UpdateService,
    // CreateService,
    // FriendsService,
    // PaymentsService,
    // GetStatsService,
    // GetUserStatsService,
    // UpdatePercentService,
    // UpdateGamePercentService,
    // DialogComponent,
    // DialogResetPasswordComponent,
    // LockDeviceService,
  ],
  entryComponents: [
    // DialogComponent,
    // DialogResetPasswordComponent
  ],
})
export class ClanModule { }
