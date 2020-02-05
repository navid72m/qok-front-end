import { NgModule } from '@angular/core';

import { RouterModule, Routes, PreloadAllModules } from '@angular/router';

import { AuthGuard } from './guards/auth.guard';
import { DataResolver } from './app.resolver';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'dashboard', loadChildren: 'app/dashboard/dashboard.module#DashboardModule' },
  { path: 'user', loadChildren: 'app/user/user.module#UserModule' },
  { path: 'question', loadChildren: 'app/question/question.module#QuestionModule' },
  { path: 'news', loadChildren: 'app/news/news.module#NewsModule' },
  { path: 'advertise', loadChildren: 'app/advertise/advertise.module#AdvertiseModule' },
  { path: 'clan', loadChildren: 'app/clan/clan.module#ClanModule' },
  { path: 'clanstats', loadChildren: 'app/clan-stat/clan-stat.module#ClanStatModule' },
  { path: 'statistic', loadChildren: 'app/statistic/statistic.module#StatisticModule' },
  { path: 'giftcodes', loadChildren: 'app/giftcodes/giftcodes.module#GiftcodesModule'},
  { path: 'cminer', loadChildren: 'app/cminer/cminer.module#CminerModule' },
  { path: 'zarinpal', loadChildren: 'app/zarinpal/zarinpal.module#ZarinpalModule' },
];

@NgModule({
	imports: [ RouterModule.forRoot(routes, {useHash: true, preloadingStrategy: PreloadAllModules}) ],
	exports: [ RouterModule ],
})
export class AppRoutingModule {}
