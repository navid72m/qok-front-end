import { NgModule }             from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ZarinpalComponent} from "./zarinpal/zarinpal.component";
const routes: Routes = [

    { path: '', redirectTo: 'zarrin-pal', pathMatch: 'full'},
    { path: 'zarrin-pal', component: ZarinpalComponent },

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ZarinpalRoutingModule {}
