import { NgModule }             from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../guards/auth.guard';
import { StatisticComponent }  from './statistic-view/statistic.component';
import { AdvertiseStatisticComponent }  from '../advertise/advertise-statistic/statistic.component';

const routes: Routes = [
    { path: '', redirectTo: 'statistic', pathMatch: 'full'},
    { path: 'dashboard', component: StatisticComponent, canActivate: [ AuthGuard ] },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class StatisticRoutingModule {}