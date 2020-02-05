import { NgModule }     from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { requestOptionsProvider } from '../default-request-options.service';
import { AuthGuard } from '../guards/auth.guard';
import { GiftcodesRoutingModule } from './giftcodes-routing.module';
import { BatchesComponent } from './batches/batches.component';
import {GiftscodesService} from "./giftscodes.service";
import {NotificationsService} from "angular2-notifications/src/simple-notifications/services/notifications.service";
import {MultiplegiftsComponent} from "./multiplegifts/multiplegifts.component";
import { MyDatePickerModule } from 'mydatepicker';
import {SinglegiftsComponent} from "./singlegifts/singlegifts.component";
import 'hammerjs';
import {ModalModule} from "angular-custom-modal";


@NgModule({
    imports: [
        GiftcodesRoutingModule,
        SharedModule,
        MyDatePickerModule,
        ModalModule


    ],
    declarations: [
        BatchesComponent,
        MultiplegiftsComponent,
        SinglegiftsComponent
    ],
    providers: [
        requestOptionsProvider,
        AuthGuard,
        GiftscodesService,
        NotificationsService,



    ],
    entryComponents: [

    ],
})
export class GiftcodesModule { }
