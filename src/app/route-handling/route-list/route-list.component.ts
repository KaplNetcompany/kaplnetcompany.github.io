import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Route } from 'src/app/datamodels/route';
import { ROUTES } from './ROUTES';

@Component({
  selector: 'app-route-list',
  templateUrl: './route-list.component.html',
  styleUrls: ['./route-list.component.scss']
})
export class RouteListComponent implements OnInit {
  AVOIDPLANE = 'Undgå flytransport';
  AVOIDSHIP = 'Undgå skibstransport';
  BACK = 'Tilbage';
  PAGETITLE = 'Tilgængelige ruter';
  TABLEDESCRIPTION = '';

  avoidPlane = false;
  avoidShip = false;

  routes: Route[];

  router: Router;
  constructor(router: Router) {
    this.router = router;
    this.routes = ROUTES;

   }

  ngOnInit(): void {
    console.log(this.routes);
  }

  GoBack(): void {
    console.log('Navigating back');
    //this.router.navigate()
  }
}
