import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RouteHandlingComponent } from './route-handling/route-handling.component';
import { RouteListComponent } from './route-handling/route-list/route-list.component';
import { RouteDescriptionComponent } from './route-handling/route-description/route-description.component';
import { DeliveryCompleteComponent } from './route-handling/delivery-complete/delivery-complete.component';

const routes: Routes = [
  { path: '', redirectTo: '/route-handling', pathMatch: 'full'},
  { path: 'route-handling', component: RouteHandlingComponent},
  { path: 'route-list', component: RouteListComponent},
  { path: 'route-description', component: RouteDescriptionComponent},
  { path: 'delivery-complete', component: DeliveryCompleteComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
