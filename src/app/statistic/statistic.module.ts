import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { AuthGuard } from '../guards/auth.guard';
import { StatisticService} from './statistic-view/statistic.service';
import { StatisticComponent }  from './statistic-view/statistic.component';
import { StatisticRoutingModule } from './statistic-routing.module';
import { requestOptionsProvider } from '../default-request-options.service';



@NgModule({
    imports: [
        SharedModule,
        StatisticRoutingModule
    ],

    declarations: [ StatisticComponent ,
    ],
    providers: [ requestOptionsProvider, AuthGuard, StatisticService ]
})

export class StatisticModule { }

