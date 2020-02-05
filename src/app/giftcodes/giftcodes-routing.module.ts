import { NgModule }             from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BatchesComponent } from './batches/batches.component';
const routes: Routes = [

    { path: '', redirectTo: 'batches', pathMatch: 'full'},
    { path: 'batches', component: BatchesComponent },

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class GiftcodesRoutingModule {}
