import { NgModule }     from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { requestOptionsProvider } from '../default-request-options.service';
import { AuthGuard } from '../guards/auth.guard';
import {ZarinpalRoutingModule} from './zarinpal-routing.module';
import { ZarinpalComponent} from './zarinpal/zarinpal.component';
import {NotificationsService} from "angular2-notifications/src/simple-notifications/services/notifications.service";
import {UpdateComponent} from "./update/update.component";
import 'hammerjs';
import {ZarinpalService} from "./zarinpal.service";
import {SearchService} from "../user/search/search.service";
import {JalaliPipe} from "../pipes/jalali";


@NgModule({
    imports: [
        ZarinpalRoutingModule,
        SharedModule,





    ],
    declarations: [
        ZarinpalComponent,
        JalaliPipe,


    ],
    providers: [
        requestOptionsProvider,
        AuthGuard,
        ZarinpalService,
        NotificationsService,




    ],
    entryComponents: [

    ],
})
export class ZarinpalModule { }
