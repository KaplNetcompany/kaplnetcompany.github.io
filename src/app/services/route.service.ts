import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { of, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { City } from '../backend-datamodels/city';
import { SelectedDelivery } from '../frontend-datamodels/selected-route';
import { ROUTES } from '../route-handling/route-list/ROUTES';
import { DeliveryRoute } from '../frontend-datamodels/delivery-route';

const testData: City[] = [
  { name: 'Tanger' },
  { name: 'Marrakesh'},
  { name: 'Cairo'},
  { name: 'St. Helena'},
  { name: 'Sierra Leone'},
  { name: 'Dakar'},
  { name: 'Victoriasøen' },
  { name: 'Guldkysten' },
  { name: 'De Kanariske Øer' }
];

@Injectable({
  providedIn: 'root'
})
export class RouteService {
  params = new HttpParams();
  constructor(private http: HttpClient) { }

  getRoutes(selectedDelivery: SelectedDelivery): Observable<DeliveryRoute[]> {
    this.params = this.params.set('ApiKey', environment.apiKey);
    this.params = this.params.set('startLocationName', selectedDelivery.startLocation);
    this.params = this.params.set('endLocationName', selectedDelivery.endLocation);
    this.params = this.params.set('recommended', selectedDelivery.recommended.toString());
    this.http.get<DeliveryRoute[]>(environment.baseUrl + '/api/route', { params: this.params});
    return of(ROUTES);
  }

  bookDelivery(): void {

  }

  async getCitites(): Promise<City[]> {
    return of(testData).toPromise()
      .then((data: City[]) => data);
  }



}
