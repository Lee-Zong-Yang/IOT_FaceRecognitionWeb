import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AuthorizedComponent } from './authorized/authorized.component';
import { UnauthorizedComponent } from './unauthorized/unauthorized.component';
import { RemoteControlComponent } from './remote-control/remote-control.component';


const routes: Routes = [  
  { path: 'login', component: LoginComponent },
  { path: 'authorized', component: AuthorizedComponent },
  { path: 'unauthorized', component: UnauthorizedComponent },
  { path: 'intruder', component: UnauthorizedComponent },
  { path: 'remoteControl', component: RemoteControlComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
