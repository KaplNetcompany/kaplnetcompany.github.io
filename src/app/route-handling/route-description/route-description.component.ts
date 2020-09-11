import { Component, OnInit } from '@angular/core';
import { StorageService } from '../../services/storage.service';
import { DeliveryRoute } from 'src/app/frontend-datamodels/delivery-route';
import { Router } from '@angular/router';

@Component({
  selector: 'app-route-description',
  templateUrl: './route-description.component.html',
  styleUrls: ['./route-description.component.scss']
})
export class RouteDescriptionComponent implements OnInit {
  storageService: StorageService;

  selectedDeliveryRoute: DeliveryRoute;
  router: Router;

  STEP = 'Trin';
  STARTLOCATION = 'Start by';
  ENDLOCATION = 'Slut by';
  TIME = 'Tid(timer)';
  TRANSPORTTYPE = 'Transporttype';
  TRACKING = 'Tracking';
  PAGETITLE = 'Rutebeskrivelse';
  CHOOSEROUTE = 'Vælg rute';
  BACK = 'Tilbage';
  YES = 'Ja';
  NO = 'Nej';

  answer: string;

  constructor(
    storageservice: StorageService,
    router: Router,
  ) {
    this.storageService = storageservice;
    this.router = router;
  }

  ngOnInit(): void {
    this.selectedDeliveryRoute = this.storageService.getSelectedDeliveryRoute();
    if (this.selectedDeliveryRoute != null) {
      this.answer = this.selectedDeliveryRoute.tracking ? this.YES : this.NO;
    } else {
      this.router.navigate(['/', 'route-list']);
    }
  }

  goBack(): void {
    this.router.navigate(['/', 'route-list']);
  }

  chooseRoute(): void {
    this.router.navigate(['/', 'delivery-complete']);
  }
}
