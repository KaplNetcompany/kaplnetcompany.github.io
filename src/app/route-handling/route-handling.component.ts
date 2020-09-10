import { Component, OnInit } from '@angular/core';
import { RouteService } from '../services/route.service';
import { SelectItem } from 'primeng/api/selectitem';



@Component({
  selector: 'app-route-handling',
  templateUrl: './route-handling.component.html',
  styleUrls: ['./route-handling.component.scss']
})



export class RouteHandlingComponent implements OnInit {
  routeservice: RouteService;
  cities: SelectItem[];

  PAGETITLE = 'Ruteplanlægning';
  SELECTCITY = 'Vælg by';
  PICKUPCITY = 'Opsamlings By';
  DESTINATIONCITY = 'Destinationsby';
  RECOMMENDED = 'Anbefalet pakke';
  CALCULATEROUTE = 'Beregn Rute';

  PickupCity: SelectItem;
  DestinationCity: SelectItem;
  recommended = false;


  constructor(routeservice: RouteService) {
    this.routeservice = routeservice;
  }

  ngOnInit(): void {
    this.routeservice.getResults()
      .then((data: SelectItem[]) => {
        this.cities = data;
      });
  }

  CalculateRoute(): void {
    if (this.PickupCity != null && this.DestinationCity != null) {
      //Go to next page
      console.log('Navigere til næste side');
    } else {
      //error message
      console.log('Pickup eller destination er tom');

    }
  }
}
