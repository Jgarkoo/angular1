import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EditComponent } from './edit/edit.component';

const routes: Routes = [
  {
    path: 'dashboard',
    title: ' home',
    component: DashboardComponent, 
    children: [
      {
        path: 'edit',
        title: 'editor', 
        component: EditComponent, 
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
