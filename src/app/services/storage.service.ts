import { Injectable } from '@angular/core';
import { SelectedDelivery } from '../frontend-datamodels/selected-route';
import { DeliveryRoute } from '../frontend-datamodels/delivery-route';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  private selectedDelivery: SelectedDelivery;
  private selectedRoute: DeliveryRoute;

  constructor() { }

  storeSelectedDeliveryRoute(route: DeliveryRoute): void {
    this.selectedRoute = route;
  }

  getSelectedDeliveryRoute(): DeliveryRoute {
    return this.selectedRoute;
  }

  storeSelectedDelivery(startLocation: string, endLocation: string, recommended: boolean): void {
    this.selectedDelivery = {
      startLocation,
      endLocation,
      recommended
    };
  }

  getSelectedDelivery(): SelectedDelivery {
    return this.selectedDelivery;
  }
}
