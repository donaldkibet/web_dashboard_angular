import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { Covid19resultsComponent } from './covid19results/covid19results.component';
import { EnrolledComponent } from './enrolled/enrolled.component';
import { MdashboardComponent } from './mdashboard.component';
import { OverviewComponent } from './overview/overview.component';
import { ScreenedComponent } from './screened/screened.component';
import { PageNotFoundComponent } from '../page-not-found/page-not-found.component';

const appRoute: Routes = [
  {
    path: 'mDashboard',
    component: MdashboardComponent,
    children: [
      { path: 'overview', component: OverviewComponent },
      { path: 'Covid 19 Results', component: Covid19resultsComponent },
      { path: 'Enrollment', component: EnrolledComponent },
      { path: 'Screening', component: ScreenedComponent },
      { path: 'not-found', component: PageNotFoundComponent },
      { path: '**', redirectTo: '/not-found' },
    ],
  },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(appRoute)],
  exports: [RouterModule],
})
export class MdashboardRoutingModule {}
