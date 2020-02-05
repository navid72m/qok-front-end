import { NgModule }             from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../guards/auth.guard';

import { NewsCreateComponent } from './news-create/news-create.component';
import { NewsFetchComponent }  from './news-fetch/news-fetch.component';
import { NewsViewComponent } from './news-view/news-view.component';

const routes: Routes = [
  { path: '', redirectTo: 'create', pathMatch: 'full'},
  { path: 'create',    component: NewsCreateComponent, canActivate: [AuthGuard] },
  { path: 'fetch',    component: NewsFetchComponent, canActivate: [AuthGuard] },
  { path: 'view/:id',    component: NewsViewComponent, canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class NewsRoutingModule {}
