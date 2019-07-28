import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { APP_CONFIG, APP_CONSTANTS } from './app.config';
import { CoreModule } from '@core/core.module';

import { PagesModule } from './pages/pages.module';
import { ComponentsModule } from '@shared/components/components.module';
import { SharedModule } from '@shared/shared.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PagesModule,
    CoreModule,
    ComponentsModule,
    SharedModule,
    BrowserAnimationsModule
  ],
  providers: [
    { provide: APP_CONFIG, useValue: APP_CONSTANTS },
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
