import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RouteHandlingComponent } from './route-handling/route-handling.component';
import { RouteListComponent } from './route-handling/route-list/route-list.component';

const routes: Routes = [
  { path: '', redirectTo: '/routehandling', pathMatch: 'full'},
  { path: 'routehandling', component: RouteHandlingComponent},
  { path: 'route-list', component: RouteListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
