import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';

import { MdashboardComponent } from './mdashboard.component';
import { OverviewComponent } from './overview/overview.component';
import { ScreenedComponent } from './screened/screened.component';
import { HighchartsChartModule } from 'highcharts-angular';
import { EnrolledComponent } from './enrolled/enrolled.component';
import { Covid19resultsComponent } from './covid19results/covid19results.component';
import { MdashboardRoutingModule } from './mdashboard-routing.module';

@NgModule({
  declarations: [
    MdashboardComponent,
    OverviewComponent,
    ScreenedComponent,
    EnrolledComponent,
    Covid19resultsComponent,
  ],
  imports: [
    CommonModule,
    HighchartsChartModule,
    RouterModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgbModule,
    BsDatepickerModule.forRoot(),
  ],
  exports: [MdashboardComponent, MdashboardRoutingModule],
})
export class MdashboardModule {}
