import { NgModule }     from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { requestOptionsProvider } from '../default-request-options.service';
import { AuthGuard } from '../guards/auth.guard';
import {CminerRoutingModule} from './cminer-routing.module';
import { QuestionComponent} from './question/question.component';
import {NotificationsService} from "angular2-notifications/src/simple-notifications/services/notifications.service";
import {UpdateComponent} from "./update/update.component";
import 'hammerjs';
import {CminerService} from "./cminer.service";
import {SearchService} from "../user/search/search.service";


@NgModule({
    imports: [
        CminerRoutingModule,
        SharedModule,



    ],
    declarations: [
        QuestionComponent,


    ],
    providers: [
        requestOptionsProvider,
        AuthGuard,
        CminerService,
        NotificationsService,
        SearchService



    ],
    entryComponents: [

    ],
})
export class CminerModule { }
