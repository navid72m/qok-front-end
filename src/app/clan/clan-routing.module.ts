import { NgModule }             from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from '../guards/auth.guard';

//import { UserSearchComponent }  from './search/search.component';
import { ClanViewComponent }    from './view/view.component';
//import { CreateUserComponent } from './create/create.component';

const routes: Routes = [
  //{ path: 'search', redirectTo: 'search/nil/nil', pathMatch: 'full'},
 // { path: 'search/:usr/:inv',    component: UserSearchComponent },
   { path: 'view/:id',  component: ClanViewComponent },
  //{ path: 'create', component: CreateUserComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClanRoutingModule {}
