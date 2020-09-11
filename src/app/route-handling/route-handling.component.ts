import { Component, OnInit } from '@angular/core';
import { City } from '../backend-datamodels/city';
import { Router } from '@angular/router';
import { StorageService } from '../services/storage.service';
import { RouteService } from '../services/route.service';

@Component({
  selector: 'app-route-handling',
  templateUrl: './route-handling.component.html',
  styleUrls: ['./route-handling.component.scss']
})



export class RouteHandlingComponent implements OnInit {


  cities: City[];

  PAGETITLE = 'Ruteplanlægning';
  SELECTCITY = 'Vælg by';
  PICKUPCITY = 'Opsamlings By';
  DESTINATIONCITY = 'Destinationsby';
  RECOMMENDED = 'Anbefalet pakke';
  CALCULATEROUTE = 'Beregn Rute';

  PickupCity: City;
  DestinationCity: City;
  recommended = false;

  router: Router;
  storageService: StorageService;
  routeservice: RouteService;

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
    this.routeservice.getCitites()
    .then((data: City[]) => {
      this.cities = data;
    });
  }

  CalculateRoute(): void {
    if (this.PickupCity != null && this.DestinationCity != null) {
      this.storageService.storeSelectedDelivery(this.PickupCity.name, this.DestinationCity.name, this.recommended);
      this.router.navigate(['/', 'route-list']);
    } else {
      // error message
      console.log('Pickup eller destination er tom');
    }
  }
}
