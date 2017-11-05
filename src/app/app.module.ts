import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuth } from 'angularfire2/auth';
import { AppRoutes } from './app.routing';

import { AngularFireDatabase } from 'angularfire2/database';
import { environment } from '../environments/environment';
import { AppComponent } from './app.component';

import { HomeComponent, LoginComponent } from './';
import { AuthService, DataService } from './services';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent
  ],
  imports: [
    AngularFireModule.initializeApp(environment.firebase),
    BrowserModule,
    AppRoutes
  ],
  providers: [ AngularFireDatabase, DataService, AuthService, AngularFireAuth ],
  bootstrap: [AppComponent]
})
export class AppModule { }
