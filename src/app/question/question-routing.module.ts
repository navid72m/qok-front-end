import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from '../guards/auth.guard';

import { QuestionViewComponent } from './view/view.component';
import { QuestionReviewComponent } from './review/review.component';
import { CreateComponent } from './create/create.component';
import { AdvertiseQuestionsListComponent } from './list/list_adquestions.component';
import { StatisticsQuestionsListComponent } from './statistics/list_statquestions.component';
import { FindByIdQuestionsListComponent } from './identifier/list_idquestions.component';

const routes: Routes = [
  { path: '', redirectTo: 'review', pathMatch: 'full'  },
  { path: 'view/:id', component: QuestionViewComponent, canActivate: [ AuthGuard ] },
  { path: 'review', component: QuestionReviewComponent, canActivate: [ AuthGuard ] },
  { path: 'view/:id/:ad_id', component: QuestionViewComponent },
  { path: 'review', component: QuestionReviewComponent },
  { path: 'create', component: CreateComponent },
  { path: 'list', component: AdvertiseQuestionsListComponent },
  { path: 'statistics', component: StatisticsQuestionsListComponent },
  { path: 'identifier/:user_id', component: FindByIdQuestionsListComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QuestionRoutingModule {}
