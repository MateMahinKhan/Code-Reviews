import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuth } from 'angularfire2/auth';
import { AppRoutes } from './app.routing';

import { AngularFireDatabase } from 'angularfire2/database';
import { environment } from '../environments/environment';
import { AppComponent } from './app.component';

import { FileComponent, HomeComponent, LoginComponent, ReviewComponent, Services } from './';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    ReviewComponent,
    FileComponent
  ],
  imports: [
    AngularFireModule.initializeApp(environment.firebase),
    BrowserModule,
    AppRoutes,
    FormsModule,
    FlexLayoutModule
  ],
  providers: [ AngularFireDatabase, ...Services, AngularFireAuth ],
  bootstrap: [AppComponent]
})
export class AppModule { }
