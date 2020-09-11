import { Component, OnInit } from '@angular/core';
import { StorageService } from 'src/app/services/storage.service';
import { SelectedDelivery } from 'src/app/frontend-datamodels/selected-route';
import { DeliveryRoute } from 'src/app/frontend-datamodels/delivery-route';
import { Router } from '@angular/router';

@Component({
  selector: 'app-delivery-complete',
  templateUrl: './delivery-complete.component.html',
  styleUrls: ['./delivery-complete.component.scss']
})
export class DeliveryCompleteComponent implements OnInit {
  ROUTECHOSEN: string;
  CHOSEN = 'rute valgt';
  DESCRIPTION = '- Email er sendt afstend til relevant modtager';

  selectedDelivery: DeliveryRoute;

  storageService: StorageService;
  router: Router;
  constructor(
    storageService: StorageService,
    router: Router
    ) {
    this.storageService = storageService;
    this.router = router;
   }

  ngOnInit(): void {
    this.selectedDelivery = this.storageService.getSelectedDeliveryRoute();
    if (this.selectedDelivery != null) {
      this.ROUTECHOSEN = this.selectedDelivery.route + ' ' + this.CHOSEN;
    } else {
      this.router.navigate(['/', 'route-description']);
    }
  }
}
