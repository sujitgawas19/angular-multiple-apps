import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {APP_BASE_HREF} from '@angular/common';
// import { HttpModule }    from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import {HashLocationStrategy, Location, LocationStrategy} from '@angular/common';

import { AppRoutingModule }     from './app-routing.module';

import { AppComponent } from './app.component';

import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    // HttpModule,
    HttpClientModule
  ],
  providers: [
    {provide: LocationStrategy, useClass: HashLocationStrategy},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { } 

@NgModule({})
export class App1SharedModule{
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: AppModule,
      providers: [
          {provide: LocationStrategy, useClass: HashLocationStrategy}
      ]
    }
  }
}