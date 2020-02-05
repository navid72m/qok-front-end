import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
// import 'hammerjs';

import { AuthGuard } from '../guards/auth.guard';
import { requestOptionsProvider } from '../default-request-options.service';

import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';

@NgModule({
  imports: [
    SharedModule,
    DashboardRoutingModule,
  ],
  declarations: [ DashboardComponent ],
  providers: [ requestOptionsProvider, AuthGuard ]
})
export class DashboardModule { }
