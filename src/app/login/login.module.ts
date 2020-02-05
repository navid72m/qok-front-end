import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

import { AuthGuard } from '../guards/auth.guard';
import { requestOptionsProvider } from '../default-request-options.service';

import { LoginComponent } from './login.component';
import { LoginService } from './login.service';

import { LoginRoutingModule } from './login-routing.module';

@NgModule({
  imports: [
    SharedModule,
    LoginRoutingModule,
  ],
  declarations: [ LoginComponent ],
  providers: [ requestOptionsProvider, AuthGuard, LoginService ],
})
export class LoginModule { }
