import { NgModule }             from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {QuestionComponent} from "./question/question.component";
const routes: Routes = [

    { path: '', redirectTo: 'cminer-index', pathMatch: 'full'},
    { path: 'cminer-index', component: QuestionComponent },

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CminerRoutingModule {}
