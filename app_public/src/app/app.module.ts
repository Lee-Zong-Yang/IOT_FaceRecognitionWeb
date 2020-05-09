import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { AuthorizedComponent } from './authorized/authorized.component';
import { HttpClientModule } from '@angular/common/http';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FooterComponent } from './footer/footer.component';
import { UnauthorizedComponent } from './unauthorized/unauthorized.component';
import { RemoteControlComponent } from './remote-control/remote-control.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AuthorizedComponent,
    NavBarComponent,
    FooterComponent,
    UnauthorizedComponent,
    RemoteControlComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
