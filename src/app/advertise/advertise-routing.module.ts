import { NgModule }             from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from '../guards/auth.guard';

import { AdvertiseComponent }  from './advertise.component';
import { PublisherComponent }  from './publisher/publisher.component';
import { AdvertiseListComponent } from './list/list.component';
import { UpdateAdvertiseComponent } from './update/update.component';
import { AdvertiseStatisticComponent } from './advertise-statistic/statistic.component';


const routes: Routes = [
  { path: '', redirectTo: 'create', pathMatch: 'full'},
  { path: 'create', component: AdvertiseComponent, canActivate: [ AuthGuard ] },
  { path: 'createpublisher', component: PublisherComponent, canActivate: [ AuthGuard ] },
  { path: 'list', component: AdvertiseListComponent, canActivate: [ AuthGuard ] },
  { path: 'update/:ad_id', component: UpdateAdvertiseComponent, canActivate: [ AuthGuard ] },
  { path: 'dashboard', component: AdvertiseStatisticComponent, canActivate: [ AuthGuard ] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdvertiseRoutingModule {}
