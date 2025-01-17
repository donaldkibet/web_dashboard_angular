import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoreModule } from './core/core.module';
import { HighchartsChartModule } from 'highcharts-angular';
import { MdashboardModule } from './mdashboard/mdashboard.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CoreModule,
    HighchartsChartModule,
    MdashboardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
