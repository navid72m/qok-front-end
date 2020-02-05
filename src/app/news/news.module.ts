import { NgModule }     from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { MyDatePickerModule } from 'mydatepicker';

import { requestOptionsProvider } from '../default-request-options.service';

import { NewsRoutingModule } from './news-routing.module';
import { AuthGuard } from '../guards/auth.guard';
import { NewsExtractExpirationService } from './news-services/news-extract-expiration.service';

import { NewsCreateComponent } from './news-create/news-create.component';
import { NewsCreateService } from './news-create/news-create.service';

import { NewsInputsComponent } from './news-inputs/news-inputs.component';

import { NewsFetchComponent } from './news-fetch/news-fetch.component';
import { NewsFetchService } from './news-fetch/news-fetch.service';
import { NewsPublishService } from './news-fetch/news-publish.service';

import { NewsViewComponent } from './news-view/news-view.component';
import { NewsViewService } from './news-view/news-view.service';
import { NewsUpdateService } from './news-view/news-update.service';
import { DialogResetPasswordComponent } from './dialog-reset-advertise/dialog-reset-advertise.component';
import { DialogPublishAllComponent } from './news-fetch/dialog-publish-all/dialog-publish-all.component';
import { DialogPublishUserComponent } from './news-fetch/dialog-publish-user/dialog-publish-user.component';

import 'hammerjs';

@NgModule({
  imports: [
    NewsRoutingModule,
    SharedModule,
    MyDatePickerModule,
  ],
  declarations: [
    NewsCreateComponent,
    NewsInputsComponent,
    NewsFetchComponent,
    NewsViewComponent,
    DialogPublishAllComponent,
    DialogPublishUserComponent,
    DialogResetPasswordComponent,
  ],
  providers: [
    requestOptionsProvider,
    AuthGuard,
    NewsExtractExpirationService,
    NewsCreateService,
    NewsFetchService,
    NewsPublishService,
    NewsViewService,
    NewsUpdateService,
  ],
  entryComponents: [
    DialogPublishAllComponent,
    DialogPublishUserComponent,
    DialogResetPasswordComponent,
  ],
})
export class NewsModule { }
