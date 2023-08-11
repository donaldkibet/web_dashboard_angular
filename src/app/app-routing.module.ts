import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './sari-dashboard/dashboard/dashboard.component';

const routes: Routes = [
  { path: '', redirectTo: 'mDashboard/overview', pathMatch: 'full' },
  { path: 'mDashboard', redirectTo: 'mDashboard/overview', pathMatch: 'full' },
  { path: 'afiDashboard', component: DashboardComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
