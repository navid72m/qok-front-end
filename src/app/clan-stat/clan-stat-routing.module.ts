import { NgModule }             from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from '../guards/auth.guard';

import { ClanStatViewComponent } from './clan-stat-view/clan-stat-view.component';

const routes: Routes = [
  { path: '', redirectTo: 'view', pathMatch: 'full'},
  { path: 'view',    component: ClanStatViewComponent, canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClanStatRoutingModule {}
