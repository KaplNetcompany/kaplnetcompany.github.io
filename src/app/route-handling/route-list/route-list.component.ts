import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DeliveryRoute, TransportType } from 'src/app/frontend-datamodels/delivery-route';
import { StorageService } from 'src/app/services/storage.service';
import { SelectedDelivery } from 'src/app/frontend-datamodels/selected-route';
import { RouteService } from 'src/app/services/route.service';

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
  TABLEDESCRIPTION = 'Klik på en ønsket rute for at blive  ført videre til en detaljeret rutebeskrivelse';
  ROUTE = 'Rute';
  PRICE = 'Pris';
  TIME = 'Tid(timer)';
  ROUTETYPES = 'Rutetyper';

  avoidPlane = false;
  avoidShip = false;

  routes: DeliveryRoute[];
  filteredRoutes: DeliveryRoute[];
  selectedRoute: DeliveryRoute;
  selectedDelivery: SelectedDelivery;

  tranportTypeCar = TransportType.Car;
  tranportTypePlane = TransportType.Plane;
  tranportTypeShip = TransportType.Ship;

  routeservice: RouteService;
  router: Router;
  storageService: StorageService;
  constructor(
    router: Router,
    storageservice: StorageService,
    routeservice: RouteService,
  ) {
    this.router = router;
    this.storageService = storageservice;
    this.routeservice = routeservice;
  }

  ngOnInit(): void {
    this.selectedDelivery = this.storageService.getSelectedDelivery();
    if (this.selectedDelivery != null) {
      this.routeservice.getRoutes(this.selectedDelivery).subscribe((routes: DeliveryRoute[]) => {
        this.routes = routes;
        this.filteredRoutes = routes;
      });
    } else {
      // display message no delivery selected
      this.router.navigate(['/', 'route-handling']);
    }
  }

  filterList(): void {
    this.filteredRoutes = this.routes.filter((route: DeliveryRoute) => {
      if (this.avoidPlane && route.routeType.plane) {
        return false;
      } else if (this.avoidShip && route.routeType.ship) {
        return false;
      } else {
        return true;
      }
    });
  }

  onRowSelect(event: any): void {
    this.storageService.storeSelectedDeliveryRoute(event.data);
    this.router.navigate(['/', 'route-description']);
  }

  GoBack(): void {
    this.router.navigate(['/', 'route-handling']);
  }
}
