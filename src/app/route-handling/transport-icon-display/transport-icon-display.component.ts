import { Component, OnInit, Input } from '@angular/core';
import { TransportType } from 'src/app/frontend-datamodels/delivery-route';

@Component({
  selector: 'app-transport-icon-display',
  templateUrl: './transport-icon-display.component.html',
  styleUrls: ['./transport-icon-display.component.scss']
})
export class TransportIconDisplayComponent implements OnInit {
  @Input() transportType: string;

  showCar = false;
  showPlane = false;
  showShip = false;
  constructor() {

   }

  ngOnInit(): void {
    this.showCar = this.transportType === TransportType.Car.toString();
    this.showPlane = this.transportType === TransportType.Plane.toString();
    this.showShip = this.transportType === TransportType.Ship.toString();
  }

}
